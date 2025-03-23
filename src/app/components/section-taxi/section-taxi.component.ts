import {Component} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {AddressComponent} from '../address/address.component';
import {NgForOf, NgIf} from '@angular/common';
import {Address,RequestType} from '../../model/requests';
import {RequestComponent} from '../request.component';
import {ContactInputComponent} from "../contact-input/contact-input.component";

@Component({
  selector: 'app-section-taxi',
  standalone: true,
  imports: [
    FormsModule,
    ContactInputComponent,
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
      this.googleDepartureLocation = address;
      console.log('Departure Location:', this.googleDepartureLocation);
    } else if (type === 'to') {
      this.googleDestinationLocation = address;
      console.log('Destination Location:', this.googleDestinationLocation);
    }
  }

  onToggleChange(event: Event) {
    this.isRequestedByHours = (event.target as HTMLInputElement).checked;
  }

  onSubmit(form: NgForm): void {
    console.log(form.value);
    console.log('Submitted Departure Location:', this.googleDepartureLocation);
    console.log('Submitted Destination Location:', this.googleDestinationLocation);
    console.log('Submitted userInputDepartureLocation:', this.userInputDepartureLocation);
    console.log('Submitted userInputDestinationLocation:', this.userInputDestinationLocation);
    console.log('after submit:', this.requestType);
    console.log('Form Submitted');
    console.log('Phone Number:', this.phoneNumber);
    console.log('Email Address:', this.emailAddress);
    console.log('Preferred Contact Method:', this.preferredContactMethod);

  }

  onAddressChange(value: string, type: string): void {
    if (type === 'from') {
      this.userInputDepartureLocation = this.userInputDepartureLocation + value;
    } else if (type === 'to') {
      this.userInputDestinationLocation = this.userInputDestinationLocation + value;
    }
  }
}
