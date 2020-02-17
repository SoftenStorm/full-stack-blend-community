var HTMLHelper = {
  sanitizingPug: (code: string) => {
    return code.replace(/classname=/gi, 'class=');
  },
  
  getElementById: (id: string) => {
    return document.getElementById(id);
  },
  getElementByClassName: (className: string) => { // return the last one
    let elements = HTMLHelper.getElementsByClassName(className);
    if (elements.length != 0) { return elements[elements.length - 1]; }
    else { return null; }
  },
  getElementsByClassName: (className: string) => {
    return document.getElementsByClassName(className);
  },
  getElementByAttributeNameAndValue: (attributeName: string, value: string) => {
    return document.querySelectorAll('[' + attributeName + '="' + value + '"]')[0];
  },
  getElementsByAttribute: (attributeName: string) => {
    return document.querySelectorAll('[' + attributeName + ']');
  },
  getElementsByTagName: (tagName: string, _window: Window=window) => {
    if (_window === null) return [];
    
    return _window.document.getElementsByTagName(tagName);
  },
  
  findPosition: (object: HTMLElement) => {
    var curleft = 0;
    var curtop = 0;
    
    if (object.offsetParent) {
      do {
        curleft += object.offsetLeft;
        curtop += object.offsetTop;
      } while (object = object.offsetParent);
    }
    
    return [curleft, curtop];
  },
  findSize: (object: HTMLElement) => {
    return [object.offsetWidth, object.offsetHeight];
  },
  findContainingIframe: (currentWindow: Window) => {
    let iframeElements = HTMLHelper.getElementsByTagName('iframe', currentWindow.parent);
    
    for (var i=0; i<iframeElements.length; i++) {
      if (HTMLHelper.getIframeContentWindow(iframeElements[i]) === currentWindow) {
        return iframeElements[i]
      }
    }
    
    return null;
  },
  findOriginalPosition: (_position: [number, number], currentWindow: Window) => {
    let result = [_position[0], _position[1]];
    
    while (currentWindow !== null && currentWindow != currentWindow.parent) {
      let iframe = HTMLHelper.findContainingIframe(currentWindow);
      if (iframe === null) break;
      
      let position = HTMLHelper.findPosition(iframe);
      
      result[0] += position[0];
      result[1] += position[1];
      
      currentWindow = currentWindow.parent;
    }
    
    return result;
  },
  
  getCurrentWindow: (element: HTMLElement) => {
    let document = element.ownerDocument;
    return document.defaultView || document.parentWindow;
  },
  getIframeContentWindow: (element: HTMLIframeElement) => {
    return element.contentWindow;
  }
};

export {HTMLHelper};