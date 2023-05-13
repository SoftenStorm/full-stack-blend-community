// Auto[Generating:V1]--->
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.

// Auto[Import]--->
import {Request, Response} from "express";
import {SourceType, ActionType, HierarchicalDataTable, HierarchicalDataRow, Input, DatabaseHelper} from '../../../helpers/DatabaseHelper';
import {ProjectConfigurationHelper} from '../../../helpers/ProjectConfigurationHelper';
import {ValidationInfo, ValidationHelper} from '../../../helpers/ValidationHelper';
import {RequestHelper} from '../../../helpers/RequestHelper';
import {RenderHelper} from '../../../helpers/RenderHelper';
import {SchemaHelper, DataTableSchema} from '../../../helpers/SchemaHelper';
import {loc} from '../../../helpers/LocalizationHelper';
import {Base as $Base} from '../../Base';

// Assign to an another one to override the base class.
// 
let Base: typeof $Base = $Base;

// <---Auto[Import]

// Import additional modules here:
//
import passport from "passport";
import {UserDocument, User} from "../../../../models/User";
import {CaptchaGenerator} from "captcha-canvas";
import bcrypt from "bcrypt";
import crypto from "crypto";

// Auto[Declare]--->
/*enum SourceType {
  Relational,
  PrioritizedWorker,
  Document,
  VolatileMemory,
  RESTful,
  Dictionary,
  Collection
}
enum ActionType {
  Insert,
  Update,
  Upsert,
  Delete,
  Retrieve,
  Popup,
  Navigate,
  Test
}*/
// <---Auto[Declare]

// Declare private static variables here:
//

// Auto[Interface]--->
/*interface HierarchicalDataTable {
  source: SourceType;
  group: string;
  rows: HierarchicalDataRow[];
  notification?: string;
}
interface HierarchicalDataRow {
  keys: {[Identifier: string]: any};
  columns: {[Identifier: string]: any};
  relations: {[Identifier: string]: HierarchicalDataTable};
  division?: number[];
}
interface Input {
  target: SourceType;
  group: string;
  name: string;
  value: any;
  guid: string;
  premise: string;
  validation: ValidationInfo;
  division?: number[];
}
interface ValidationInfo {
  name: string;
  required: boolean;
  customMessage: string;
  format?: string;
  regex?: string;
}*/
// <---Auto[Interface]

// Declare or extend interfaces here:
//

// Auto[ClassBegin]--->
class Controller extends Base {
  constructor(request: Request, response: Response, template: string) {
    super(request, response, template);
    try {
      let [action, schema, data] = this.initialize(request);
      this.perform(action, schema, data);
     } catch(error) {
      RenderHelper.error(response, error);
    }
  }
  // <---Auto[ClassBegin]
  // Declare class variables and functions here:
  //
  protected validate(data: Input[]): void {
  	// The message of thrown error will be the validation message.
  	//
 		ValidationHelper.validate(data);
        
    let email, password, confirmPassword;
  	
  	for (let input of data) {
    	switch (input.name) {
    	  case 'email':
    	    email = input.value;
    	    break;
    	  case 'password':
    	    password = input.value;
    	    break;
    	  case 'confirmPassword':
    	    confirmPassword = input.value;
    	    break;
    	}
  	}
  	
  	if (email && !email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
  	  throw new Error("You have entered a wrong email."); 
  	}
  	
  	if ((!!password && !!confirmPassword) && password !== confirmPassword) throw new Error("Password confirmation doesn't match password."); 
  }
  
  protected async accessories(data: Input[]): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        resolve({
          title: null,
          description: null,
          keywords: null,
          language: null,
          contentType: null,
          revisitAfter: null,
          robots: null,
          linkUrl: null,
          imageUrl: null,
          itemType: null,
          contentLocale: null
        });
      } catch(error) {
        reject(error);
      }
    });
  }
  
  protected async get(data: Input[]): Promise<{[Identifier: string]: HierarchicalDataTable}> {
    return new Promise(async (resolve, reject) => {
      try {
        const user = this.request.user as UserDocument;
        if (user) {
          this.response.redirect('/account/settings');
          resolve({});
        } else {
          const answer = this.generateAnswer();
          const buffer = this.generateChallenge(answer);
          
          this.request.session.challenge = await bcrypt.hash(answer, 10);
          this.request.session.save(async () => {
            resolve(Object.assign({},
              await super.get(data),
              {
                info: {
                  source: SourceType.Collection,
                  group: 'info',
                  rows: [{
                    keys: {
                      id: 'default'
                    },
                    columns: {
                      challenge: `data:image/png;base64,${buffer.toString("base64")}`
                    },
                    relations: {},
                  }]
                }
              }
            ));
          });
        }
      } catch(error) {
        reject(error);
      }
    });
  }
  
  protected async post(data: Input[]): Promise<{[Identifier: string]: HierarchicalDataTable}> {
    return new Promise(async (resolve, reject) => {
      /* try {
        resolve(await super.post(data));
      } catch(error) {
        reject(error);
      } */
      reject(new Error("Not Implemented Error"));
    });
  }
  
  protected async put(data: Input[]): Promise<{[Identifier: string]: HierarchicalDataTable}> {
    return new Promise(async (resolve, reject) => {
      /* try {
        resolve(await super.put(data));
      } catch(error) {
        reject(error);
      } */
      reject(new Error("Not Implemented Error"));
    });
  }
  
  protected async delete(data: Input[]): Promise<{[Identifier: string]: HierarchicalDataTable}> {
    return new Promise(async (resolve, reject) => {
      /* try {
        resolve(await super.delete(data));
      } catch(error) {
        reject(error);
      } */
      reject(new Error("Not Implemented Error"));
    });
  }
  
  protected async insert(data: Input[], schema: DataTableSchema): Promise<HierarchicalDataRow[]> {
    return new Promise(async (resolve, reject) => {
      try {
      	let options = RequestHelper.getOptions(this.pageId, this.request);
        resolve(await DatabaseHelper.insert(data, schema, options.crossRelationUpsert, this.request.session));
      } catch(error) {
        reject(error);
      }
    });
  }
  
  protected async update(data: Input[], schema: DataTableSchema): Promise<HierarchicalDataRow[]> {
    return new Promise(async (resolve) => {
      const reject = (async (error) => {
        const answer = this.generateAnswer();
        const buffer = this.generateChallenge(answer);
        
        this.request.session.challenge = await bcrypt.hash(answer, 10);
        this.request.session.save(async () => {
          resolve([{
            keys: {
              id: 'default'
            },
            columns: {
              challenge: `data:image/png;base64,${buffer.toString("base64")}`,
              success: false,
              error: error.toString()
            },
            relations: {},
          }]);
        });
      }).bind(this);
      
    	try {
      	let options = RequestHelper.getOptions(this.pageId, this.request);
      	let email, password, confirmPassword, challenge;
      	
      	for (let input of data) {
        	switch (input.name) {
        	  case 'email':
        	    email = input.value;
        	    break;
        	  case 'password':
        	    password = input.value;
        	    break;
        	  case 'confirmPassword':
        	    confirmPassword = input.value;
        	    break;
        	  case 'challenge':
        	    challenge = input.value;
        	    break;
        	}
      	}
      	
      	if (!this.request.session.challenge) return reject(new Error('Challenge information isn\'t found. (1201)'));
      	if (!await bcrypt.compare(challenge, this.request.session.challenge)) return reject(new Error('You have entered an incorrect of displaying captcha. (1202)'));
      	
      	if (!!password && !!confirmPassword) {
      	  const user = new User({
            email: email,
            password: password
          });

          User.findOne({email: email}, (err, existingUser) => {
            if (err) {
              return reject(new Error('There was an internal server error, please try again. (1001)'));
            }
            if (existingUser) {
              return reject(new Error('Account with that email address already exists.'));
            }
            
            user.save((err) => {
              if (err) {
                return reject(new Error('There was an internal server error, please try again. (1002)'));
              }
              
              this.request.logIn(user, (err) => {
                if (err) {
                  return reject(new Error('There was an internal server error, please try again. (1003)'));
                }
                resolve([{
                  keys: {
                    id: 'default'
                  },
                  columns: {
                    success: true
                  },
                  relations: {},
                }]);
              });
            });
          });
      	} else {
      	  User.findOne({email: email}, (err, existingUser) => {
            if (err) {
              return reject(new Error('There was an internal server error, please try again. (1101)'));
            }
            if (!existingUser) {
              return reject(new Error('An account with the email address doesn\'t exist.'));
            }
            
            existingUser.comparePassword(password, (err, isMatch: boolean) => {
              if (!isMatch) {
                return reject(new Error('Password doesn\'t match. (1102)'));
              } else {
                this.request.logIn(existingUser, (err) => {
                  if (err) {
                    return reject(new Error('There was an internal server error, please try again. (1103)'));
                  }
                  resolve([{
                    keys: {
                      id: 'default'
                    },
                    columns: {
                      success: true
                    },
                    relations: {},
                  }]);
                });
              }
            });
          });
      	}
      } catch(error) {
        reject(error);
      }
    });
  }
  
  protected async upsert(data: Input[], schema: DataTableSchema): Promise<HierarchicalDataRow[]> {
    return new Promise(async (resolve, reject) => {
    	try {
        resolve(await DatabaseHelper.upsert(data, schema, this.request.session));
      } catch(error) {
        reject(error);
      }
    });
  }
  
  protected async remove(data: Input[], schema: DataTableSchema): Promise<HierarchicalDataRow[]> {
    return new Promise(async (resolve, reject) => {
    	try {
        resolve(await DatabaseHelper.delete(data, schema, this.request.session));
      } catch(error) {
        reject(error);
      }
    });
  }
  
  protected async retrieve(data: Input[], schema: DataTableSchema): Promise<{[Identifier: string]: HierarchicalDataTable}> {
    return new Promise(async (resolve, reject) => {
    	try {
      	let options = RequestHelper.getOptions(this.pageId, this.request);
        resolve(await DatabaseHelper.retrieve(data, schema, this.request.session, options.enabledRealTimeUpdate));
      } catch(error) {
        reject(error);
      }
    });
  }
  
  protected async navigate(data: Input[], schema: DataTableSchema): Promise<string> {
    return new Promise(async (resolve, reject) => {
    	try {
    	  throw new Error("Not Implemented Error");
      } catch(error) {
        reject(error);
      }
    });
  }
  
  private generateAnswer(): string {
    return crypto.randomBytes(8).toString("hex");
  }
  
  private generateChallenge(answer): Buffer {
    const captcha = new CaptchaGenerator()
      .setDimension(150, 450)
      .setCaptcha({text: answer, size: 60, color: "black"})
      .setDecoy({size: 30, opacity: 0.9})
      .setTrace({color: "black"});
    const buffer = captcha.generateSync();
    
    return buffer;
  }
 	
  // Auto[MergingBegin]--->  
  protected initialize(request: Request): [ActionType, DataTableSchema, Input[]] {
    let schema: DataTableSchema = RequestHelper.getSchema(this.pageId, request);
    let data: Input[] = [];
    let input: Input = null;
    
    // <---Auto[MergingBegin]
    // Auto[Merging]--->
    RequestHelper.registerSubmit("9e885d49", "954a291a", "update", ["0820677c","1b650e66","22d343bd"], {initClass: null, crossRelationUpsert: false, enabledRealTimeUpdate: false, name: "Login Button"});
    RequestHelper.registerSubmit("9e885d49", "b2b66792", "update", ["0820677c","1b650e66","22d343bd","d3de6c93"], {initClass: null, crossRelationUpsert: false, enabledRealTimeUpdate: false, name: "Signup Button"});
    RequestHelper.registerInput('1b650e66', "document", "User", "email");
    ValidationHelper.registerInput('1b650e66', "[user.email]", true, "Please enter your email", undefined, null);
    for (let input of RequestHelper.getInputs(this.pageId, request, '1b650e66')) {
    
      // Override data parsing and manipulation of [user.email] here:
      // 
      
      if (input != null) data.push(input);
    }
    RequestHelper.registerInput('22d343bd', "document", "User", "password");
    ValidationHelper.registerInput('22d343bd', "[user.password]", true, "Please enter your password", undefined, null);
    for (let input of RequestHelper.getInputs(this.pageId, request, '22d343bd')) {
    
      // Override data parsing and manipulation of [user.password] here:
      // 
      
      if (input != null) data.push(input);
    }
    RequestHelper.registerInput('d3de6c93', "document", "User", "confirmPassword");
    ValidationHelper.registerInput('d3de6c93', "[user.confirmPassword]", true, "Please confirm your password", undefined, null);
    for (let input of RequestHelper.getInputs(this.pageId, request, 'd3de6c93')) {
    
      // Override data parsing and manipulation of [user.confirmPassword] here:
      // 
      
      if (input != null) data.push(input);
    }
    RequestHelper.registerInput('0820677c', "document", "info", "challenge");
    ValidationHelper.registerInput('0820677c', "[info.challenge]", true, "Please enter the displaying captcha", undefined, null);
    for (let input of RequestHelper.getInputs(this.pageId, request, '0820677c')) {
    
      // Override data parsing and manipulation of [info.challenge] here:
      // 
      
      if (input != null) data.push(input);
    }

    // <---Auto[Merging]
    
    // Auto[MergingEnd]--->
    
    let action: ActionType = RequestHelper.getAction(this.pageId, request);
    return [action, schema, data];
  }
  // <---Auto[MergingEnd]
  
  // Auto[ClassEnd]--->
}
// <---Auto[ClassEnd]

// Export variables here:
//
export default Controller;

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.