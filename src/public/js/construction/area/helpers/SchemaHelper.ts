import {HTMLHelper} from '../../helpers/HTMLHelper.js';

var SchemaHelper = {
  generateDataSchema: (): any => {
    let tables = {};
    
    const groups = ['RelationalTable', 'DocumentTable', 'WorkerInstance', 'VolatileMemory'];
    const entities = ['RelationalColumn', 'DocumentNotation', 'WorkerQueue', 'VolatilePrefix'];
    
    for (const [i, group] of groups.entries()) {
      let tableElements = HTMLHelper.getElementsByAttributeNameAndValue('internal-fsb-class', group);
      
      for (let tableElement of tableElements) {
        let tableName = HTMLHelper.getAttribute(tableElement, 'data-title-name');
        let tableGUID = HTMLHelper.getAttribute(tableElement, 'internal-fsb-guid');
        let columnElements = HTMLHelper.getElementsByAttributeNameAndValue('internal-fsb-class', entities[i], tableElement);
        let relationElements = HTMLHelper.getElementsByAttributeNameAndValue('internal-fsb-class', 'Connection');
        
        let keys = {};
        let columns = {};
        let relations = {};
        
        for (let columnElement of columnElements) {
          let columnName = HTMLHelper.getAttribute(columnElement, 'data-title-name');
          let columnGUID = HTMLHelper.getAttribute(columnElement, 'internal-fsb-guid');
          let columnType = HTMLHelper.getAttribute(columnElement, 'data-column-type');
          let fieldType = HTMLHelper.getAttribute(columnElement, 'data-field-type');
          let required = HTMLHelper.getAttribute(columnElement, 'data-required');
          let unique = HTMLHelper.getAttribute(columnElement, 'data-unique');
          
          if (columnType == 'primary') {
            keys[columnName] = {
              name: columnName,
            	guid: columnGUID,
            	fieldType: fieldType,
            	required: (required == 'true'),
            	unique: (unique == 'true')
            }
          } else {
            columns[columnName] = {
              name: columnName,
            	guid: columnGUID,
            	fieldType: fieldType,
            	required: (required == 'true'),
            	unique: (unique == 'true')
            }
          }
        }
        
        for (let relationElement of relationElements) {
          let relationName = HTMLHelper.getAttribute(relationElement, 'data-title-name');
          let relationGUID = HTMLHelper.getAttribute(relationElement, 'internal-fsb-guid');
          let sourceGroupName = HTMLHelper.getAttribute(relationElement, 'data-source-group-name');
          let sourceEntityName = HTMLHelper.getAttribute(relationElement, 'data-source-entity-name');
          let targetGroupName = HTMLHelper.getAttribute(relationElement, 'data-target-group-name');
          let targetEntityName = HTMLHelper.getAttribute(relationElement, 'data-target-entity-name');
          
          if (sourceGroupName && sourceEntityName && targetGroupName && targetEntityName) {
            if (tableName == sourceGroupName) {
              relations[targetGroupName] = {
                name: relationName,
              	guid: relationGUID,
                sourceGroup: sourceGroupName,
                sourceEntity: sourceEntityName,
                targetGroup: targetGroupName,
                targetEntity: targetEntityName
              };
            } else if (tableName == targetGroupName) {
              relations[sourceGroupName] = {
                name: relationName,
              	guid: relationGUID,
                sourceGroup: targetGroupName,
                sourceEntity: targetEntityName,
                targetGroup: sourceGroupName,
                targetEntity: sourceEntityName
              };
            }
          }
        }
        
        tables[tableName] = {
          source: ['relational', 'worker', 'document', 'volatile-memory'][i],
          group: tableName,
          guid: tableGUID,
          keys: keys,
          columns: columns,
          relations: relations
        };
      }
    }
    
    return tables;
  }
};

export {SchemaHelper};