// Auto[Generating:V1]--->
// PLEASE DO NOT MODIFY BECUASE YOUR CHANGES MAY BE LOST.

import {Request} from 'express';
import {SourceType, ActionType, Input} from './DatabaseHelper';
import {DataTableSchema, DataSchema, SchemaHelper, FieldType} from './SchemaHelper';
import {ValidationHelper} from './ValidationHelper';
import {ProjectConfigurationHelper} from './ProjectConfigurationHelper';
import {CodeHelper} from "./CodeHelper";
import {XMLHttpRequest} from 'xmlhttprequest-ts';
import { strict as assert } from 'assert';

interface RequestParamInfo {
  target: SourceType;
  group: boolean;
  name: string;
}

const requestParamInfoDict: any = {};
const requestSubmitInfoDict: any = {};

const RequestHelper = {
	request: async (method: string, url: string, body: string, responseType: string=null, retryCount=10): Promise<any> => {
		return new Promise((resolve, reject) => {
			const process = (() => {
			  const xmlhttp = new XMLHttpRequest();
  	    xmlhttp.onreadystatechange = function() {
  				if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
  					if (xmlhttp.status == 200) {
  						let output = xmlhttp.responseText;
  						
  						console.log(`\x1b[35mResults... ${JSON.stringify(output)}\x1b[0m`);
  						
			  	    switch (responseType) {
			  	    	case 'json':
			  	    		try {
			  	    			output = JSON.parse(xmlhttp.responseText);
			  	    		} catch(error) {
			  	    			reject(error);
			  	    			
			  	    			return;
			  	    		}
			  	    		break;
			  	    	default:
			  	    		output = xmlhttp.responseText;
			  	    		break;
			  	    }
			  	    
  						resolve(output);
  					} else {
  					  setTimeout((() => {
  					    if (--retryCount >= 0) {
  					    	console.log(`\x1b[35mRetrying...\x1b[0m`);
  					    	
  					      process();
  					    } else {
  						    reject(xmlhttp.status);
  						  }
  						}).bind(this), 1000);
  					}
  				}
  	    };
  	    xmlhttp.onerror = function(error) {
  				console.log(`\x1b[31mResults... ${error}\x1b[0m`);
  	    };
  	    
  	    console.log(`\x1b[32m${JSON.stringify(method)} Requesting ${url}... ${JSON.stringify(body)}\x1b[0m`);
  	    
  	    xmlhttp.open(method, url, true);
  	    if (body) {
  	    	xmlhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  	    	xmlhttp.send(body);
  	    }
  	    else xmlhttp.send();
  	  });
  	  process();
		});
	},
  get: (url: string, responseType: string=null): Promise<any> => {
  	const method = 'GET';
  	const bodyString = null;
  	
  	return RequestHelper.request(method, url, bodyString, responseType);
  },
  post: (url: string, body: any, responseType: string=null): Promise<any> => {
  	const method = 'POST';
  	const bodyString = JSON.stringify(body);
  	
  	return RequestHelper.request(method, url, bodyString, responseType);
  },
  put: (url: string, body: any, responseType: string=null): Promise<any> => {
  	const method = 'PUT';
  	const bodyString = JSON.stringify(body);
  	
  	return RequestHelper.request(method, url, bodyString, responseType);
  },
  delete: (url: string, body: any, responseType: string=null): Promise<any> => {
  	const method = 'DELETE';
  	const bodyString = JSON.stringify(body);
  	
  	return RequestHelper.request(method, url, bodyString, responseType);
  },
	registerInput: (guid: string, target: string, group: string, name: string): void => {
		assert(guid !== null && guid !== undefined, 'guid cannot be null or undefined.');
		assert(guid !== '', 'guid cannot be an empty string.');
		
		if (target == null && group = '' && name == '') return;
		
		assert(target !== null && target !== undefined, 'target cannot be null or undefined.');
		assert(target !== '', 'target cannot be an empty string.');
		assert(group !== null && group !== undefined, 'group cannot be null or undefined.');
		assert(group !== '', 'group cannot be an empty string.');
		assert(name !== null && name !== undefined, 'name cannot be null or undefined.');
		assert(name !== '', 'name cannot be an empty string.');
		
		let _target: SourceType;
		switch (target) {
			case 'relational':
				_target = SourceType.Relational;
				break;
			case 'worker':
				_target = SourceType.PrioritizedWorker;
				break;
			case 'document':
				_target = SourceType.Document;
				break;
			case 'volatile-memory':
				_target = SourceType.VolatileMemory;
				break;
			case 'RESTful':
				_target = SourceType.RESTful;
				break;
			default:
				throw new Error('There was an error trying to retrieve input info (target value isn\'t in the predefined set).');
		}
		
		const info = {
			target: _target,
			group: group,
			name: name
		};
		
		if (requestParamInfoDict[guid] && !CodeHelper.equals(requestParamInfoDict[guid], info)) {
			throw new Error('There is a conflict of difference input definition of the same guid.');
		}
		
		requestParamInfoDict[guid] = info;
	},
	registerSubmit: (pageId: string, guid: string, action: string, fields: string[], options: any): void => {
		assert(pageId !== null && pageId !== undefined, 'pageId cannot be null or undefined.');
		assert(pageId !== '', 'pageId cannot be an empty string.');
		assert(guid !== null && guid !== undefined, 'guid cannot be null or undefined.');
		assert(guid !== '', 'guid cannot be an empty string.');
		
		if (action === null) return;
		
		assert(action !== null && action !== undefined, 'action cannot be null or undefined.');
		assert(action !== '', 'action cannot be an empty string.');
		assert(fields !== null, 'fields cannot be null or undefined.');
		assert(typeof options === 'object' && (options == null || options.constructor === Object), 'options must be a simple object.');
		
		CodeHelper.recursiveEvaluate(fields, (value: any) => {
    	assert(value !== null && value !== undefined, 'fields cannot contain any null or undefined.');
    });
    
    const info = {
			action: action,
			fields: fields,
			options: options
		};
    
    if (requestSubmitInfoDict[pageId + guid] && !CodeHelper.equals(requestSubmitInfoDict[pageId + guid], info)) {
			throw new Error('There is a conflict of difference submit definition of the same page and guid.');
		}
		
		requestSubmitInfoDict[pageId + guid] = info;
	},
	getAction: (pageId: string, request: Request): ActionType => {
		assert(pageId !== null && pageId !== undefined, 'pageId cannot be null or undefined.');
		assert(pageId !== '', 'pageId cannot be an empty string.');
		assert(request !== null && request !== undefined, 'request cannot be null or undefined.');
		
		const json: any = request.body;
		
		assert(json !== null && json !== undefined, 'JSON body cannot be null or undefined.');
		assert(typeof json === 'object' && json.constructor === Object, 'JSON must be a simple object.');
		
		if (typeof json.guid !== 'string' || !requestSubmitInfoDict[pageId + json.guid]) return null;
		
		assert(typeof json.guid === 'string', 'guid in JSON must be a string.');
		assert(requestSubmitInfoDict[pageId + json.guid], 'The submit information isn\'t available.');
		
		const action = requestSubmitInfoDict[pageId + json.guid] && requestSubmitInfoDict[pageId + json.guid].action || null;
		
		switch (action) {
			case 'insert':
				return ActionType.Insert;
			case 'update':
				return ActionType.Update;
			case 'upsert':
				return ActionType.Upsert;
			case 'delete':
				return ActionType.Delete;
			case 'retrieve':
				return ActionType.Retrieve;
			case 'popup':
				return ActionType.Popup;
			case 'navigate':
				return ActionType.Navigate;
			case 'test':
				return ActionType.Test;
			default:
				return null;
		}
	},
	getFields: (pageId: string, request: Request): any => {
		assert(pageId !== null && pageId !== undefined, 'pageId cannot be null or undefined.');
		assert(pageId !== '', 'pageId cannot be an empty string.');
		assert(request !== null && request !== undefined, 'request cannot be null or undefined.');
		
		const json: any = request.body;
		
		assert(json !== null && json !== undefined, 'JSON body cannot be null or undefined.');
		assert(typeof json === 'object' && json.constructor === Object, 'JSON must be a simple object.');
		
		if (typeof json.guid !== 'string' || !requestSubmitInfoDict[pageId + json.guid]) return [];
		
		assert(typeof json.guid === 'string', 'guid in JSON must be a string.');
		assert(requestSubmitInfoDict[pageId + json.guid], 'The submit information isn\'t available.');
		
		return requestSubmitInfoDict[pageId + json.guid].fields;
	},
	getOptions: (pageId: string, request: Request): any => {
		assert(pageId !== null && pageId !== undefined, 'pageId cannot be null or undefined.');
		assert(pageId !== '', 'pageId cannot be an empty string.');
		assert(request !== null && request !== undefined, 'request cannot be null or undefined.');
		
		const json: any = request.body;
		
		assert(json !== null && json !== undefined, 'JSON body cannot be null or undefined.');
		assert(typeof json === 'object' && json.constructor === Object, 'JSON must be a simple object.');
		
		if (typeof json.guid !== 'string' || !requestSubmitInfoDict[pageId + json.guid]) return null;
		
		assert(typeof json.guid === 'string', 'guid in JSON must be a string.');
		assert(requestSubmitInfoDict[pageId + json.guid], 'The submit information isn\'t available.');
		
		return requestSubmitInfoDict[pageId + json.guid].options;
	},
	getParamInfos: (guid: string): any => {
		assert(guid !== null && guid !== undefined, 'guid cannot be null or undefined.');
		assert(guid !== '', 'guid cannot be an empty string.');
		
		const info = requestParamInfoDict[guid.split('[')[0]];
		
		if (info === undefined || info === null) {
			throw new Error(`There was an error trying to retrieve param info (target ${guid} doesn\'t exist).`);
		}
		
		return info;
	},
	getSchema: (pageId: string, request: Request, schemata: DataSchema = ProjectConfigurationHelper.getDataSchema()): DataTableSchema => {
		assert(pageId !== null && pageId !== undefined, 'pageId cannot be null or undefined.');
		assert(pageId !== '', 'pageId cannot be an empty string.');
		assert(request !== null && request !== undefined, 'request cannot be null or undefined.');
		
		const fields = RequestHelper.getFields(pageId, request);
		
		if (fields.length == 0) return null;
		
		const info = RequestHelper.getParamInfos(fields[0]);
		
		return SchemaHelper.getDataTableSchemaFromNotation(info.group.split('.')[0], schemata);
	},
	getInput: (pageId: string, request: Request, guid: string): Input => {
		const json: any = request.body;
		
		if (json == null) {
			throw new Error('There was an error trying to obtain requesting parameters (requesting body is null).');
		}
		
		if (!json.hasOwnProperty(guid)) {
		  return null;
		}
		
		const paramInfo = RequestHelper.getParamInfos(guid);
		const fields = RequestHelper.getFields(pageId, request);
		
		if (fields.indexOf(guid.split('[')[0]) == -1) {
			throw new Error('There was an error trying to obtain requesting parameters (found a prohibited requesting parameter).');
		}
		
		const namespace = guid.split('[')[0];
		const indexes = JSON.parse('[' + (guid.split('[')[1] || ']'));
		const splited = paramInfo.group.split('.');
		const group = splited.pop();
		const premise = splited.join('.') || null;
		
		const input: Input = {
		  target: paramInfo.target,
  		group: group.replace(/[@!]/g, ''),
  		name: paramInfo.name,
  		value: json[guid],
  		guid: guid,
  		premise: premise && premise.replace(/[@!]/g, '') || null,
  		division: indexes,
  		associate: [0, 1].indexOf(group.indexOf('@')) != -1,
  		notify: [0, 1].indexOf(group.indexOf('!')) != -1,
  		validation: null
		};
		
		if (input != null) {
			ValidationHelper.attachInfo(input);
		}
		
		return input;
	},
	getInputs: (pageId: string, request: Request, guid: string): Input[] => {
		const json: any = request.body;
		
		if (json == null) {
			throw new Error('There was an error trying to obtain requesting parameters (requesting body is null).');
		}
		
		const inputs = [];
		
		for (const key in json) {
			if (json.hasOwnProperty(key) && key.indexOf(guid) == 0) {
				const input = RequestHelper.getInput(pageId, request, key);
				
				if (input) inputs.push(input);
			}
		}
		
		return inputs;
	},
	createInputs: (values: {[Identifier: string]: any}, data: DataSchema=ProjectConfigurationHelper.getDataSchema()): Input[] => {
		const results = [];
		const _values = {};
		
		for (const key in values) {
			if (values.hasOwnProperty(key)) {
				if (values[key] != null && typeof values[key] == 'object' && !(values[key] instanceof Date)) {
					for (const indexes in values[key]) {
						_values[`${key}[${indexes}]`] = values[key][indexes];
					}
				}
				else _values[key] = values[key];
			}
		}
		
		values = _values;
		
		for (const key in values) {
			if (values.hasOwnProperty(key)) {
				const namespace = key.split('[')[0];
				const splited = namespace.split('.');
				const indexes = JSON.parse('[' + (key.split('[')[1] || ']'));
				const name = splited.pop() || null;
				const _group = splited.pop() || null;
				const group = _group.replace(/[@!]/g, '');
				const premise = splited.join('.') || null;
				
				if (name == null || group == null) throw new Error('There was an error trying to create a list of inputs (${key}).');
				if (!data.tables[group]) throw new Error(`There was an error trying to create a list of inputs (couldn't find a group, named ${group}).`);
				if (!data.tables[group].keys[name] && !data.tables[group].columns[name]) throw new Error(`There was an error trying to create a list of inputs (couldn't find a field, named ${name}; choices are ${[...Object.keys(data.tables[group].keys), ...Object.keys(data.tables[group].columns)].join(', ')}).`);
				
				let value = values[key];
				const type = data.tables[group].keys[name] && data.tables[group].keys[name].fieldType ||
					data.tables[group].columns[name] && data.tables[group].columns[name].fieldType;
				
				if (value === null) value = 'null';
				if (typeof value === 'string') {
					if (value == 'null') value = null;
					else {
						switch (type) {
							case FieldType.AutoNumber:
							case FieldType.Number: 
								value = parseFloat(value);
								break;
						}
					}
				
					const input: Input = {
					  target: data.tables[group].source,
			  		group: group,
			  		name: name,
			  		value: value,
		  			guid: `${namespace}${indexes.length != 0 && '[' + indexes.join(',') + ']' || ''}`,
			  		premise: premise && premise.replace(/[@!]/g, ''),
		  			division: indexes,
  					associate: [0, 1].indexOf(_group.indexOf('@')) != -1,
  					notify: [0, 1].indexOf(_group.indexOf('!')) != -1,
			  		validation: null
					};
					
					results.push(input);
				} else if (Array.isArray(value)) {
					let index = 0;
					for (const _value of value) {
						const input: Input = {
						  target: data.tables[group].source,
				  		group: group,
				  		name: name,
				  		value: _value,
				  		guid: `${namespace}[${index++}]`,
				  		premise: premise && premise.replace(/[@!]/g, ''),
		  				division: indexes,
  						associate: [0, 1].indexOf(_group.indexOf('@')) != -1,
  						notify: [0, 1].indexOf(_group.indexOf('!')) != -1,
				  		validation: null
						};
						
						results.push(input);
					}
				} else {
					const input: Input = {
					  target: data.tables[group].source,
			  		group: group,
			  		name: name,
			  		value: value,
		  			guid: `${namespace}${indexes.length != 0 && '[' + indexes.join(',') + ']' || ''}`,
			  		premise: premise && premise.replace(/[@!]/g, ''),
		  			division: indexes,
  					associate: [0, 1].indexOf(_group.indexOf('@')) != -1,
  					notify: [0, 1].indexOf(_group.indexOf('!')) != -1,
			  		validation: null
					};
					
					results.push(input);
				}
			}
		}
		
		return results;
	},
  sortInputs: (inputs: Input[]) => {
    for (const input of inputs) {
      input.division = input.division || [];
    }
    
    let foundEmptied = false;
    let foundSingle = false;
    for (let i=0; i<inputs.length; i++) {
      foundEmptied = foundEmptied || (inputs[i].division.length == 0);
      foundSingle = foundSingle || (inputs[i].division.length == 1);
    }
    
    if (foundEmptied) {
      for (let i=0; i<inputs.length; i++) {
        inputs[i].division.splice(0, 0, 0);
      }
      foundSingle = true;
    }
    
    inputs.sort((a, b) => {
      const _a = [].concat(a.division);
      const _b = [].concat(b.division);
      
      if (_a.length != _b.length) {
        const max = Math.max(_a.length, _b.length);
        
        for (let i=_a.length; i<=max; i++) {
          _a.push(-1);
        }
        for (let i=_b.length; i<=max; i++) {
          _b.push(-1);
        }
      }
      
      for (let i=0; i<_a.length; i++) {
        if (_a[i] != _b[i]) return (_a[i] < _b[i]) ? -1 : 1;
      }
      
      return 0;
    });
    
    const registers = [];
    const multiple = [];
    let latest: string = null;
    let length = 0;
    
    for (let i=0; i<inputs.length; i++) {
    	const division = inputs[i].division;
    	
    	if (division.length > length) {
    		for (let j=length; j<division.length; j++) {
    			registers[j] = 0;
    			if (multiple[j] === undefined) multiple[j] = false;
    		}
    	} else if (division.length == length) {
    		if (latest != division.join(',')) {
    			registers[length - 1] += 1;
    			multiple[length - 1] = true;
    		}
    	} else {
    		registers[division.length - 1] += 1;
    		multiple[division.length - 1] = true;
    	}
    	
    	length = division.length;
    	latest = division.join(',');
    	
  		for (let j=0; j<division.length; j++) {
  			division[j] = registers[j];
  		}
    }
    
	  let concurring = 0;
	  while (multiple[concurring] === false) concurring++;
	  concurring = Math.min(concurring, multiple.length - 1);
	  
	  if (multiple.length > 1) {
		  for (let i=0; i<inputs.length; i++) {
		  	inputs[i].division.splice(0, concurring);
		  }
		}
		
		foundEmptied = false;
    for (let i=0; i<inputs.length; i++) {
      foundEmptied = foundEmptied || (inputs[i].division.length == 0);
    }
    
    if (foundEmptied) {
      for (let i=0; i<inputs.length; i++) {
        inputs[i].division.splice(0, 0, 0);
      }
    }
  }
};

export {RequestHelper};

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECUASE YOUR CHANGES MAY BE LOST.