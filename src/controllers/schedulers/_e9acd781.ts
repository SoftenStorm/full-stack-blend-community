// Auto[Generating:V1]--->
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.

// Auto[Import]--->
import {SourceType, ActionType, HierarchicalDataTable, HierarchicalDataRow} from '../../helpers/DatabaseHelper';
import {ProjectConfigurationHelper} from '../../helpers/ProjectConfigurationHelper';
import {SchemaHelper, DataTableSchema} from '../../helpers/SchemaHelper';
import {SchedulerHelper} from '../../helpers/SchedulerHelper';
import {Base as $Base} from '../Base';

// Assign to an another one to override the base class.
// 
let Base: any = $Base;

// <---Auto[Import]

// Import additional modules here:
//

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
}*/
// <---Auto[Interface]

// Declare or extend interfaces here:
//

// Auto[ClassBegin]--->
class Scheduler extends Base {
  constructor() {
  	super();
  }
  // <---Auto[ClassBegin]
  
  // Declare class variables and functions here:
  //
  protected setup() {
  	// Place your custom setup here (instantaneous):
  	//
    
	}
  
  // Auto[MergingBegin]--->  
  private initialize(): [number, number] {
  	let days: number;
  	let minutes: number;
  	let delegate: () => Promise<void>;
	  // <---Auto[MergingBegin]
	  // Auto[Merging]--->

		days = 42;
		minutes = 720;
		delegate = null;
		
    if (days != 0) {
    
      // Override data parsing and manipulation of Timing 2 here:
      // 
      
      if (delegate != null) SchedulerHelper.scheduling(days, minutes, delegate);
    }

	  // <---Auto[Merging]
	  
	  // Auto[MergingEnd]--->
	}
  // <---Auto[MergingEnd]
  
  // Auto[ClassEnd]--->
}
// <---Auto[ClassEnd]

// Export variables here:
//
export default Scheduler;

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.