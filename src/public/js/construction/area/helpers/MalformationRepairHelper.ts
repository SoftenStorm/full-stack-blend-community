import {HTMLHelper} from '../../helpers/HTMLHelper';
import {CodeHelper} from '../../helpers/CodeHelper';
import {FORWARD_STYLE_TO_CHILDREN_CLASS_LIST} from '../../Constants';

var MalformationRepairHelper = {
	repair: (container: HTMLElement=document) => {
  	MalformationRepairHelper.recursiveRepair([document.body]);
  },
	recursiveRepair: (elements: any) => {
    for (let j = 0; j < elements.length; j++) {
    	if (HTMLHelper.isForChildren(elements[j]) && (!elements[j].firstElementChild || !elements[j].firstElementChild.tagName)) {
    		elements[j].parentNode.removeChild(elements[j]);
    		continue;
    	}
    	
    	if (elements[j].getAttribute && FORWARD_STYLE_TO_CHILDREN_CLASS_LIST.indexOf(elements[j].getAttribute('internal-fsb-class')) != -1) {
    		if ((elements[j].getAttribute('style') || '').indexOf('-fsb-empty') == -1) {
    			elements[j].setAttribute('style', '-fsb-empty');
    		}
    		const currentConcatenatedClasses = elements[j].getAttribute('class') || '';
    		const internalConcatenatedClasses = CodeHelper.getInternalClasses(currentConcatenatedClasses);
    		if (currentConcatenatedClasses != internalConcatenatedClasses) {
    			elements[j].setAttribute('class', internalConcatenatedClasses);
    		}
    		
    		if (HTMLHelper.hasClass(elements[j], 'internal-fsb-selecting')) {
    			HTMLHelper.removeClass(elements[j], 'internal-fsb-selecting');
    		}
    		
    		if (HTMLHelper.hasClass(elements[j], 'internal-fsb-walking')) {
    			HTMLHelper.removeClass(elements[j], 'internal-fsb-walking');
    		}
    	}
      
      elements[j].children && MalformationRepairHelper.recursiveRepair(elements[j].children);
    }
	}
};

export {MalformationRepairHelper};