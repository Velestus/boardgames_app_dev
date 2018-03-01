import { Injectable } from '@angular/core';
import { Meeting } from './meeting';
import { MEETINGS } from './mock-meetings';

@Injectable()
export class MeetingService {

  constructor() { }

  getMeetings(): Meeting[] {
    return MEETINGS;
  }
}
