// Auto[Generating:V1]--->
// PLEASE DO NOT MODIFY BECUASE YOUR CHANGES MAY BE LOST.

import {Base as Scheduler} from '../schedulers/Base';
import {scheduler} from '../../server';
import schedule from 'node-schedule';

enum DAYS {
	SUNDAY=1,
	MONDAY=2,
	TUESDAY=4,
	WEDNESDAY=8,
	THURSDAY=16,
	FRIDAY=32,
	SATURDAY=64
}

const SchedulerHelper = {
  register: <T extends Scheduler>(scheduler: new () => T) => {
  	new scheduler();
  },
  scheduling: (days: number, minutes: number, delegate: () => Promise<void>): void => {
  	const _days = [];
  	if ((days & DAYS.SUNDAY) != 0) _days.push(0);
  	if ((days & DAYS.MONDAY) != 0) _days.push(1);
  	if ((days & DAYS.TUESDAY) != 0) _days.push(2);
  	if ((days & DAYS.WEDNESDAY) != 0) _days.push(3);
  	if ((days & DAYS.THURSDAY) != 0) _days.push(4);
  	if ((days & DAYS.FRIDAY) != 0) _days.push(5);
  	if ((days & DAYS.SATURDAY) != 0) _days.push(6);
  	
  	let _minutes = minutes % 60;
  	const _hours = Math.floor(minutes / 60);
  	
  	if (_hours != 0) _minutes = 0;
  	
  	const rule = new schedule.RecurrenceRule();

  	rule.dayOfWeek = _days;
		if (_hours != 0 || _minutes == 0) rule.hour = _hours;
		if (_minutes != 0) rule.minute = _minutes;
  	
  	scheduler && schedule.scheduleJob(rule, delegate);
  }
};

export {SchedulerHelper};

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECUASE YOUR CHANGES MAY BE LOST.