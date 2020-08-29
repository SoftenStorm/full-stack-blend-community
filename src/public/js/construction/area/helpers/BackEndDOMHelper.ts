import {HTMLHelper} from '../../helpers/HTMLHelper.js';
import {BackEndScriptHelper, DEFAULTS} from '../../helpers/BackEndScriptHelper.js';
import {InternalProjectSettings} from './WorkspaceHelper.js';
import {FORM_CONTROL_CLASS_LIST} from '../../Constants.js';

var BackEndDOMHelper = {
	generateBackEndCode: function() {
		let info = {};
		Object.assign(info, InternalProjectSettings);
		
		info['autoGeneratedCodeForMergingBackEndScript'] = BackEndDOMHelper.generateCodeForMergingSection(document.body);
		
		let pages = InternalProjectSettings.pages;
    let editingPageID = InternalProjectSettings.editingPageID;
    pages = pages.filter(page => page.id == editingPageID);
    
    let path = pages && pages[0] && pages[0].path || '';
    path = path.split(':')[0].replace(/(^\/|\/$)/g, '');
		
		info['editingPagePath'] = (path) ? path + '/' : '';
		
		return BackEndScriptHelper.generateScriptCode(info);
	},
	generateCodeForMergingSection: function(element: HTMLElement) {
  	let executions: string[] = [];
  	let lines: string[] = [];
  	BackEndDOMHelper.recursiveGenerateCodeForMergingSection(element, executions, lines);
    
    return [executions.join('\n'), lines.join('\n')];
  },
  recursiveGenerateCodeForMergingSection: function(element: HTMLElement, executions: string[], lines: string[]) {
  	if (HTMLHelper.hasClass(element, 'internal-fsb-accessory')) return;
    
    if (element && element.tagName) {
    	if (HTMLHelper.hasClass(element, 'internal-fsb-element') &&
    		FORM_CONTROL_CLASS_LIST.indexOf(HTMLHelper.getAttribute(element, 'internal-fsb-class')) != -1) {
		    let info = HTMLHelper.getAttributes(element, false);
    		
	    	let code, mapping;
	    	[code, mapping] = BackEndScriptHelper.generateMergingCode(info);
	    	
	    	if (code) lines.push(code);
    	}
    	
    	if (HTMLHelper.hasClass(element, 'internal-fsb-element') && HTMLHelper.getAttribute(element, 'internal-fsb-class') == 'Button') {
    		let reactClassComposingInfoGUID = HTMLHelper.getAttribute(element, 'internal-fsb-guid');
    		let submitType = HTMLHelper.getAttribute(element, 'internal-fsb-data-wizard-type');
    		let submitControls = HTMLHelper.getAttribute(element, 'internal-fsb-data-controls');
    		let reactClassForPopup = HTMLHelper.getAttribute(element, 'internal-fsb-popup-init-class');
    		let submitCrossType = HTMLHelper.getAttribute(element, 'internal-fsb-data-wizard-cross-operation') == 'upsert';
        let realTimeUpdate = HTMLHelper.getAttribute(element, 'internal-fsb-data-wizard-real-time-update') == 'true';
    		
    		if (submitControls) submitControls = submitControls.trim();
    		
    		executions.push(`    RequestHelper.registerSubmit(${JSON.stringify(InternalProjectSettings.editingPageID)}, ${JSON.stringify(reactClassComposingInfoGUID)}, ${JSON.stringify(submitType)}, ${JSON.stringify(submitControls && submitControls.split(' ') || [])}, {initClass: ${JSON.stringify(reactClassForPopup)}, crossRelationUpsert: ${JSON.stringify(submitCrossType)}, enabledRealTimeUpdate: ${JSON.stringify(realTimeUpdate)}});`);
    	}
    	
    	let children = [...element.childNodes];
      for (let child of children) {
        BackEndDOMHelper.recursiveGenerateCodeForMergingSection(child, executions, lines);
      }
    }
  }
}

export {BackEndDOMHelper};