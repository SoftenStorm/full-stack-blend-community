import * as SocketIO from "socket.io";
import fs from "fs";
import dotenv from "dotenv";
import Redis from "ioredis";
import * as child from "child_process";

import app from "./app";

let socket = null;
let server = null;

if (["development", "staging", "production"].indexOf(process.env.NODE_ENV) == -1) {
  dotenv.config();
}

if (["development", "staging", "production"].indexOf(process.env.NODE_ENV) == -1) {
	child.execSync('kill-port 443');
	
  const https = require("https");
  
  // Development SSL
  const sslkey = fs.readFileSync("localhost.key");
  const sslcert = fs.readFileSync("localhost.crt");
  const options = {
      key: sslkey,
      cert: sslcert
  };
  
  server = https.createServer(options, app).listen(443);
	socket = SocketIO.listen(server);
} else {
	child.execSync('kill-port ' + (process.env.PORT || 8000));
	
	const http = require("http");
	
	// [TODO] Replace and configure production SSL
  server = http.createServer(app).listen(process.env.PORT || 8000);
	socket = SocketIO.listen(server);
}

// Resque
//
const {Worker, Scheduler, Queue, Plugins} = require("node-resque");

let queue: any = null;
let scheduler: any = null;

if (process.env.RESQUE_REDIS_URI) {
	const redisConnectionURL = new URL(process.env.RESQUE_REDIS_URI);
	const redisConnectionSettings = {
		host: redisConnectionURL.host.split(":")[0],
		port: parseInt(redisConnectionURL.port),
		db: 0,
		password: redisConnectionURL.password,
		enableReadyCheck: true,
		autoResubscribe: true
	};
	const redisClientForResque = new Redis(redisConnectionSettings);
	const redisConnectionSettingForResque = {
		redis: redisClientForResque
	};
	const jobs = {
	  perform: {
	    plugins: [Plugins.JobLock],
	    pluginOptions: {
	      JobLock: {reEnqueue: true},
	    },
	    perform: async (table: any) => {
	    	const {WorkerHelper} = require("./controllers/helpers/WorkerHelper");
	      await WorkerHelper.perform(table);
	    }
	  }
	};
	queue = new Queue({
			connection: redisConnectionSettingForResque
		},
		jobs
	);
	const worker = new Worker(
	  {
	  	connection: redisConnectionSettingForResque,
	  	queues: ["general"]
	  },
	  jobs
	);
	scheduler = new Scheduler({
			connection: redisConnectionSettingForResque
		}
	);
	
	(async () => {
		try {
			console.log("Booting worker..");
			worker.on("error", (error) => {
			  console.log(error);
			});
			await worker.connect();
			worker.start();
			
			console.log("Booting scheduler..");
			scheduler.on("error", (error) => {
			  console.log(error);
			});
			await scheduler.connect();
			scheduler.start();
			
			console.log("Booting queue..");
			queue.on("error", (error) => {
			  console.log(error);
			});
			await queue.connect();
			
			console.log("Done");
		} catch(error) {
			console.log(error);
		}
	})();
}

// StackBlend routes
// 
import * as endpoint from "./controllers/Endpoint";

try {
	const route = require("./route");
	route.default(app);
} catch (error) {
	if (process.env.JEST_WORKER_ID !== undefined) {
		console.log("\x1b[33m", error, "\x1b[0m");
	} else {
		console.log("\x1b[31m", error, "\x1b[0m");
	}
	endpoint.addRecentError(error);
}

// StackBlend test console
// 
if (["production"].indexOf(process.env.NODE_ENV) == -1) {
	const controller = require("./controllers/components/Test");

	app.get("/test/api", controller.index);
	app.post("/test/api", controller.index);
	app.put("/test/api", controller.index);
	app.delete("/test/api", controller.index);
}

export {server, socket, queue, scheduler};
