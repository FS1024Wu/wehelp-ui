import { Component } from '@angular/core';
import {AddressComponent} from '../address/address.component';
import {FormsModule, NgForm} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';
import {RequestComponent} from '../request.component';
import {Address, PropertyType, RequestType} from '../../model/requests';
import {ContactInputComponent} from "../contact-input/contact-input.component";

@Component({
  selector: 'app-section-house-cleaning',
  standalone: true,
  imports: [
    AddressComponent,
    ContactInputComponent,
    FormsModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './section-house-cleaning.component.html',
  styleUrls: ['../section-taxi/section-taxi.component.css','./section-house-cleaning.component.css']
})
export class SectionHouseCleaningComponent extends RequestComponent{
  requestType: RequestType;
  propertyTypes: PropertyType[] = Object.values(PropertyType);
  cleaningToPropertyTypeFrom: PropertyType | undefined;
  helpers: number | undefined;
  hours: number | undefined;
  bedrooms: [number, number, number, string] | undefined;
  bathrooms: [number, string, number, string,number, string, string] | undefined;

  constructor() {
    super();
    this.requestType = RequestType.HOUSE_CLEANING
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

  onAddressChange(value: string, type: string): void {
    if (type === 'from') {
      this.userInputDepartureLocation = this.userInputDepartureLocation + value;
    } else if (type === 'to') {
      this.userInputDestinationLocation = this.userInputDestinationLocation + value;
    }
  }

  onSubmit(form: NgForm): void {
    console.log(form.value);
    console.log('Submitted Departure Location:', this.googleDepartureLocation);
    console.log('Submitted Destination Location:', this.googleDestinationLocation);
    console.log('Submitted userInputDepartureLocation:', this.userInputDepartureLocation);
    console.log('Submitted userInputDestinationLocation:', this.userInputDestinationLocation);
    console.log('Submitted:', this.cleaningToPropertyTypeFrom);
    console.log('Submitted:', this.bedrooms);
    console.log('Submitted:', this.bathrooms);
    console.log('Submitted:', this.helpers);
    console.log('Submitted:', this.hours);
    console.log('after submit:', this.requestType);
    console.log('Phone Number:', this.phoneNumber);
    console.log('Email Address:', this.emailAddress);
    console.log('Preferred Contact Method:', this.preferredContactMethod);
  }
}
