import {INTERNAL_CLASSES_GLOBAL_REGEX, NON_SINGLE_CONSECUTIVE_SPACE_GLOBAL_REGEX} from '../Constants.js';

const KEYSTRING = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

function utf8_encode(source: string) {
    source = source.replace(/\r\n/g,"\n");
    var utftext = "";

    for (var n = 0; n < source.length; n++) {
        var c = source.charCodeAt(n);

        if (c < 128) {
            utftext += String.fromCharCode(c);
        }
        else if((c > 127) && (c < 2048)) {
            utftext += String.fromCharCode((c >> 6) | 192);
            utftext += String.fromCharCode((c & 63) | 128);
        }
        else {
            utftext += String.fromCharCode((c >> 12) | 224);
            utftext += String.fromCharCode(((c >> 6) & 63) | 128);
            utftext += String.fromCharCode((c & 63) | 128);
        }
    }

    return utftext;
}

var CodeHelper = {
  clone: (obj: any) => {
    return JSON.parse(JSON.stringify(obj));
  },
  convertToBase64: (source: string) => {
    var output = "";
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0;

    source = utf8_encode(source);

    while (i < source.length) {
      chr1 = source.charCodeAt(i++);
      chr2 = source.charCodeAt(i++);
      chr3 = source.charCodeAt(i++);

      enc1 = chr1 >> 2;
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      enc4 = chr3 & 63;

      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
        enc4 = 64;
      }

      output = output +
      KEYSTRING.charAt(enc1) + KEYSTRING.charAt(enc2) +
      KEYSTRING.charAt(enc3) + KEYSTRING.charAt(enc4);
    }
    
    return output;
	},
	getCustomClasses: (value: string) => {
    return (value || '').replace(INTERNAL_CLASSES_GLOBAL_REGEX, '').replace(NON_SINGLE_CONSECUTIVE_SPACE_GLOBAL_REGEX, ' ').trimStart();
  },  
  getInternalClasses: (value: string) => {
    return (value || '').match(INTERNAL_CLASSES_GLOBAL_REGEX).join(' ');
  },
  convertDictionaryIntoPairs: (dictionary: {string: any}) => {
    let pairs = [];
    
    for (let key in dictionary) {
      if (dictionary.hasOwnProperty(key)) {
        pairs.push({
          name: key,
          value: dictionary[key]
        });
      }
    }
    
    return pairs;
  }
};

export {CodeHelper};