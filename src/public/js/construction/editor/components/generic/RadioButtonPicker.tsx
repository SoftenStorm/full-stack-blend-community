import {TextHelper} from '../../../helpers/TextHelper.js';
import {FontHelper} from '../../../helpers/FontHelper.js';
import {IProps, IState, DefaultState, DefaultProps, Base} from '../Base.js';
import {FullStackBlend, DeclarationHelper} from '../../../helpers/DeclarationHelper.js';
import * as CONSTANTS from '../../../Constants.js';

let options = {
		// Front-End Options
		// 
    "text-align": CONSTANTS.TEXT_ALIGN_OPTIONS,
    "font-style": CONSTANTS.FONT_STYLE_OPTIONS,
    "table-cell-0": CONSTANTS.TABLE_CELL_0_OPTIONS,
    "table-cell-1": CONSTANTS.TABLE_CELL_1_OPTIONS,
    "internal-fsb-react-mode": CONSTANTS.REACT_MODE_OPTIONS,
    "disabled": CONSTANTS.ENABLED_OPTIONS,
    "checked": CONSTANTS.CHECKED_OPTIONS,
    "readonly": CONSTANTS.READONLY_OPTIONS,
    "required": CONSTANTS.REQUIRE_OPTIONS,
    "multiple": CONSTANTS.MULTIPLE_OPTIONS,
    "data-source-type-1": CONSTANTS.DATA_SOURCE_TYPE_OPTIONS_1,
    "data-source-type-2": CONSTANTS.DATA_SOURCE_TYPE_OPTIONS_2,
    "data-wizard-type-1": CONSTANTS.DATA_WIZARD_TYPE_OPTIONS_1,
    "data-wizard-type-2": CONSTANTS.DATA_WIZARD_TYPE_OPTIONS_2,
    "internal-fsb-textbox-mode": CONSTANTS.TEXTBOX_MODE_OPTIONS,
    "-fsb-background-type": CONSTANTS.BACKGROUND_TYPE_OPTIONS,
    "type": CONSTANTS.TEXT_INPUT_TYPE_OPTIONS,
    
    // Back-End Options
		// 
		"data-column-type": CONSTANTS.BACKEND_DATA_COLUMN_TYPE,
		"data-field-type": CONSTANTS.BACKEND_DATA_FIELD_TYPE,
		"data-required": CONSTANTS.BACKEND_DATA_REQUIRED,
		"data-unique": CONSTANTS.BACKEND_DATA_UNIQUE,
		"data-force-constraint": CONSTANTS.BACKEND_DATA_FORCE_CONSTRAINT
}
let map = {
    "data-source-type-1": "internal-fsb-data-source-type",
    "data-source-type-2": "internal-fsb-data-source-type",
    "data-wizard-type-1": "internal-fsb-data-wizard-type",
    "data-wizard-type-2": "internal-fsb-data-wizard-type"
}

const Mode = Object.freeze({
    STYLE:   Symbol("style"),
    ATTRIBUTE:  Symbol("attribute"),
    EXTENSION: Symbol("extension")
});

declare let React: any;
declare let ReactDOM: any;
declare let perform: any;

interface Props extends IProps {
    customClassName: string;
    options: any;
    onValueChange(value: any);
    required: boolean;
}

interface State extends IState {
}

let ExtendedDefaultProps = Object.assign({}, DefaultProps);
Object.assign(ExtendedDefaultProps, {
    customClassName: null,
    options: null,
    required: false
});

let ExtendedDefaultState = Object.assign({}, DefaultState);
Object.assign(ExtendedDefaultState, {
});

class RadioButtonPicker extends Base<Props, State> {
    protected static defaultProps: Props = ExtendedDefaultProps;
    
    constructor(props) {
    		super(props);
    }
    
    public update(properties: any) {
        if (!super.update(properties)) return;
    }
    
    protected buttonOnClick(value: any, mode: Mode) {
    		let currentState = this.getState(value, mode);
    		let nameOrArrayOfRegularExpression = value[0];
    		let target = (typeof value[1] == 'function') ? value[1].call(this) : value[1];
    		
    		if (this.props.required && currentState) return;
    		
        if (typeof nameOrArrayOfRegularExpression === 'object') { // Array of Regular Expression
		        let list = [];
        		
        		for (let regularExpression of nameOrArrayOfRegularExpression) {
        				let results: any = null;
        			
		          	switch(mode) {
				            case Mode.STYLE:
					            	results = this.state.styleValues[regularExpression];
								        break;
				            case Mode.ATTRIBUTE:
		                		results = this.state.attributeValues[regularExpression];
								        break;
				            case Mode.EXTENSION:
		                		results = this.state.extensionValues[regularExpression];
								        break;
		            }
		            
		            let keys = Object.keys(results || {});
		            
		            for (let key of keys) {
				      			list.push({
				                name: key.split(':').splice(-1)[0],
				                value: (currentState) ? null : target
				            });
								}
		        }
		        
            switch(mode) {
		            case Mode.STYLE:
		            case Mode.EXTENSION:
		        				perform('update', {
						            styles: list
						        });
						        break;
		            case Mode.ATTRIBUTE:
                		perform('update', {
						            attributes: list
						        });
						        break;
            }
        } else if (this.getOptions()[0][1] && this.getOptions()[0][1][0] == '{') {
            let target = this.getOptions()[0][1];
            let current;
            
            switch(mode) {
		            case Mode.STYLE:
		            		current = this.state.styleValues[map[nameOrArrayOfRegularExpression] || nameOrArrayOfRegularExpression];
		            		break;
		            case Mode.ATTRIBUTE:
		            		current = this.state.attributeValues[map[nameOrArrayOfRegularExpression] || nameOrArrayOfRegularExpression];
		            		break;
		            case Mode.EXTENSION:
		            		current = this.state.extensionValues[map[nameOrArrayOfRegularExpression] || nameOrArrayOfRegularExpression];
		            		break;
            }
            
            let currentDict = JSON.parse(current || '{}');
            let targetDict = JSON.parse(target);
            
            if (!currentState) {
                for (let target in targetDict) {
                    if (targetDict.hasOwnProperty(target)) {
                        currentDict[target] = targetDict[target];
                    }
                }
            } else {
                for (let target in targetDict) {
                    if (targetDict.hasOwnProperty(target)) {
                        delete currentDict[target];
                    }
                }
            }
            
            switch(mode) {
		            case Mode.STYLE:
		            		perform('update', {
						            styles: [{
						                name: map[nameOrArrayOfRegularExpression] || nameOrArrayOfRegularExpression,
						                value: JSON.stringify(currentDict)
						            }]
						        });
						        break;
		            case Mode.ATTRIBUTE:
		            		perform('update', {
						            attributes: [{
						                name: map[nameOrArrayOfRegularExpression] || nameOrArrayOfRegularExpression,
						                value: JSON.stringify(currentDict)
						            }]
						        });
						        break;
		            case Mode.EXTENSION:
		            		perform('style', {
						            styles: [{
						                name: map[nameOrArrayOfRegularExpression] || nameOrArrayOfRegularExpression,
						                value: JSON.stringify(currentDict)
						            }]
						        });
						        break;
            }
        } else {
            switch(mode) {
		            case Mode.STYLE:
		            		perform('update', {
						            styles: [{
						                name: map[nameOrArrayOfRegularExpression] || nameOrArrayOfRegularExpression,
						                value: (currentState) ? null : target
						            }]
						        });
						        break;
		            case Mode.ATTRIBUTE:
		            		perform('update', {
						            attributes: [{
						                name: map[nameOrArrayOfRegularExpression] || nameOrArrayOfRegularExpression,
						                value: (currentState) ? null : target
						            }]
						        });
						        break;
		            case Mode.EXTENSION:
		            		perform('style', {
						            styles: [{
						                name: map[nameOrArrayOfRegularExpression] || nameOrArrayOfRegularExpression,
						                value: (currentState) ? null : target
						            }]
						        });
						        break;
            }
        }
        
        if (this.props.onValueChange) this.props.onValueChange((currentState) ? null : target);
    }
    
    private getState(value: any, mode: Mode): boolean {
    		let nameOrArrayOfRegularExpression = value[0];
    		let target = (typeof value[1] == 'function') ? value[1].call(this) : value[1];
    		
        if (typeof nameOrArrayOfRegularExpression === 'object') { // Array of Regular Expression
    				let results = {};
          	switch(mode) {
	            case Mode.STYLE:
	            		results = this.state.styleValues;
		            	break;
	            case Mode.ATTRIBUTE:
	            		results = this.state.attributeValues;
		            	break;
	            case Mode.EXTENSION:
	            		results = this.state.extensionValues;
		            	break;
     				}
     				
     				let found = true;
     				for (let regularExpression of nameOrArrayOfRegularExpression) {
     							if (!results[regularExpression]) {
     									found = false;
     									break;
     							} else {
     									let keys = Object.keys(results[regularExpression]);
     									if (keys.length == 0) {
     											found = false;
     											break;
     									} else {
		     									for (let key of keys) {
		     											if (!results[regularExpression][key]) {
		     													found = false;
		     													break;
		     											}
		     									}
		     							}
     							}
     				}
     				
     				return found;
        } else if (this.getOptions()[0][1] && this.getOptions()[0][1][0] == '{') {
            let _target = this.getOptions()[0][1];
            let current;
            
            switch(mode) {
		            case Mode.STYLE:
		            		current = this.state.styleValues[map[nameOrArrayOfRegularExpression] || nameOrArrayOfRegularExpression];
		            		break;
		            case Mode.ATTRIBUTE:
		            		current = this.state.attributeValues[map[nameOrArrayOfRegularExpression] || nameOrArrayOfRegularExpression];
		            		break;
		            case Mode.EXTENSION:
		            		current = this.state.extensionValues[map[nameOrArrayOfRegularExpression] || nameOrArrayOfRegularExpression];
		            		break;
            }
            
            let currentDict = JSON.parse(current || '{}');
            let targetDict = JSON.parse(_target || '{}');
            
            let isHavingAll = true;
            for (let target in targetDict) {
                if (targetDict.hasOwnProperty(target)) {
                    if (currentDict[target] !== targetDict[target]) {
                        isHavingAll = false;
                    }
                }
            }
            
            return isHavingAll;
        } else {
            switch(mode) {
		            case Mode.STYLE:
		            		return this.state.styleValues[map[nameOrArrayOfRegularExpression] || nameOrArrayOfRegularExpression] == target;
		            case Mode.ATTRIBUTE:
		            		return this.state.attributeValues[map[nameOrArrayOfRegularExpression] || nameOrArrayOfRegularExpression] == target;
		            case Mode.EXTENSION:
		            		return this.state.extensionValues[map[nameOrArrayOfRegularExpression] || nameOrArrayOfRegularExpression] == target;
            }
        }
    }
    
    private getOptions() {
        if (this.props.watchingStyleNames[0]) {
            return options[this.props.watchingStyleNames[0]] || this.props.options;
        } else if (this.props.watchingAttributeNames[0]) {
            return options[this.props.watchingAttributeNames[0]] || this.props.options;
        } else if (this.props.watchingExtensionNames[0]) {
            return options[this.props.watchingExtensionNames[0]] || this.props.options;
        }
    }
    
    render() {
        return (
          pug `
            .btn-group.btn-group-sm.mr-1.mb-1(role="group")
              if this.props.watchingStyleNames[0]
                each value, index in this.getOptions()
                  button.btn.text-center(key="item-style-" + index, className=(this.getState(value, Mode.STYLE) ? 'btn-primary' : (this.props.customClassName || 'btn-light')), onClick=this.buttonOnClick.bind(this, value, Mode.STYLE) style={fontSize: '12px'})
                    if typeof value[2] == 'string'
                      i.m-0(className="fa "+ value[2])
                    else
                      i.m-0(className="fa "+ value[2][0])
                      = ' ' + value[2][1]
              if this.props.watchingAttributeNames[0]
                each value, index in this.getOptions()
                  button.btn.text-center(key="item-attribute-" + index, className=(this.getState(value, Mode.ATTRIBUTE) ? 'btn-primary' : (this.props.customClassName || 'btn-light')), onClick=this.buttonOnClick.bind(this, value, Mode.ATTRIBUTE) style={fontSize: '12px'})
                    if typeof value[2] == 'string'
                      i.m-0(className="fa "+ value[2])
                    else
                      i.m-0(className="fa "+ value[2][0])
                      = ' ' + value[2][1]
              if this.props.watchingExtensionNames[0]
                each value, index in this.getOptions()
                  button.btn.text-center(key="item-extension-" + index, className=(this.getState(value, Mode.EXTENSION) ? 'btn-primary' : (this.props.customClassName || 'btn-light')), onClick=this.buttonOnClick.bind(this, value, Mode.EXTENSION) style={fontSize: '12px'})
                    if typeof value[2] == 'string'
                      i.m-0(className="fa "+ value[2])
                    else
                      i.m-0(className="fa "+ value[2][0])
                      = ' ' + value[2][1]
          `
        )
    }
}

DeclarationHelper.declare('Components.RadioButtonPicker', RadioButtonPicker);

export {Props, State, ExtendedDefaultProps, ExtendedDefaultState, RadioButtonPicker};