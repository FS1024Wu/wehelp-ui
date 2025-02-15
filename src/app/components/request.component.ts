import {Address} from '../model/requests';
import {Utils} from '../shared/utils';
import {Component} from '@angular/core';


@Component({
  template: `
  `,
  standalone: true
})
export class RequestComponent {
  protected readonly Utils = Utils;

  today: string = '';
  departureLocation: Address | undefined;
  inputDepartureLocation: string = '';
  destinationLocation: Address | undefined;
  inputDestinationLocation: string = '';
  fromDate: string = '';
  fromHour: string = '';
  fromMinute: string = '';
  toDate: string = '';
  toHour: string = '';
  toMinute: string = '';


  constructor() {
    this.today = this.getToday();
  }
  getToday(): string {
    const currentDate = new Date();
    return currentDate.toISOString().split('T')[0]; // Returns "YYYY-MM-DD"
  }

}
