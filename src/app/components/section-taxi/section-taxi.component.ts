import {Component} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {AddressComponent} from '../address/address.component';
import {NgForOf, NgIf} from '@angular/common';
import {Address,RequestType} from '../../model/requests';
import {RequestComponent} from '../request.component';

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
export class SectionTaxiComponent extends RequestComponent{

  isRequestedByHours: boolean = false;
  requestType: RequestType;
  constructor() {
    super();
    this.requestType = RequestType.TAXI
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

  onSubmit(form: NgForm): void {
    console.log(form.value);
    console.log('Submitted Departure Location:', this.departureLocation);
    console.log('Submitted Destination Location:', this.destinationLocation);
    console.log('Submitted inputDepartureLocation:', this.inputDepartureLocation);
    console.log('Submitted inputDestinationLocation:', this.inputDestinationLocation);
    console.log('after submit:', this.requestType);

  }

  onAddressChange(value: string, type: string): void {
    if (type === 'from') {
      this.inputDepartureLocation = this.inputDepartureLocation + value;
    } else if (type === 'to') {
      this.inputDestinationLocation = this.inputDestinationLocation + value;
    }
  }
}
