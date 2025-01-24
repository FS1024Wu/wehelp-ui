import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AddressComponent} from '../address/address.component';
import {Utils} from '../../shared/utils';
import {NgForOf, NgIf} from '@angular/common';
import {Address} from '../../model/requests';

@Component({
  selector: 'app-section-taxi',
  standalone: true,
  imports: [
    FormsModule,
    AddressComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './section-taxi.component.html',
  styleUrl: './section-taxi.component.css'
})
export class SectionTaxiComponent {
  protected readonly Utils = Utils;

  today: string = this.getToday();
  departureLocation: Address | undefined ;
  destinationLocation: Address | undefined ;
  fromDate: string = '';
  fromHour: string = '';
  fromMinute: string = '';
  toDate: string = '';
  toHour: string = '';
  toMinute: string = '';
  isRequestedByHours: boolean = false;

  getToday(): string {
    const currentDate = new Date();
    return currentDate.toISOString().split('T')[0]; // Returns "YYYY-MM-DD"
  }

  onAddressSelected(address: Address, type: 'from' | 'to'): void {
    if (type === 'from') {
      this.departureLocation = address;
      console.log('Departure Location:', this.departureLocation);
    } else if (type === 'to') {
      this.destinationLocation = address;
      console.log('Destination Location:', this.destinationLocation);
    }
  }

  onToggleChange(event: Event) {
    this.isRequestedByHours = (event.target as HTMLInputElement).checked;
  }

  onSubmit(): void {
    // Use the stored values on form submission
    console.log('Submitted Departure Location:', this.departureLocation);
    console.log('Submitted Destination Location:', this.destinationLocation);
  }

}
