import logger from "./logger";
import dotenv from "dotenv";
import fs from "fs";
import * as path from "path";

export const ENVIRONMENT = process.env.NODE_ENV;
const prod = ENVIRONMENT === "production";
const staging = ENVIRONMENT === "staging";
const test = ENVIRONMENT === "test";
const develop = !prod && !staging && !test;

const envPath = path.resolve(__dirname, "../../dev.env");

if ((develop || test) && fs.existsSync(envPath)) {

    logger.debug("Using .env file to supply config environment variables");
    dotenv.config({path: envPath});

} else {

    logger.debug("Using system to supply config environment variables");

}

export const {SESSION_SECRET} = process.env;
export const MONGODB_URI = prod ? process.env.MONGODB_URI : process.env.MONGODB_URI_LOCAL;

if (!SESSION_SECRET) {

    logger.error("No client secret. Set SESSION_SECRET environment variable.");
    process.exit(1);

}

if (!MONGODB_URI) {

    if (prod) {

        logger.error("No mongo connection string. Set MONGODB_URI environment variable.");

    } else {

        logger.error("No mongo connection string. Set MONGODB_URI_LOCAL environment variable.");

    }
    process.exit(1);

}