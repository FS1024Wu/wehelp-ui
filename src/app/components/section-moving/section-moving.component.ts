import { Component } from '@angular/core';
import {RequestComponent} from '../request.component';
import {Address, MoveRequestVehicleType, PropertyType, RequestType} from '../../model/requests';
import {AddressComponent} from '../address/address.component';
import {FormsModule, NgForm, ReactiveFormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';
import {ContactInputComponent} from "../contact-input/contact-input.component";

@Component({
  selector: 'app-section-moving',
  standalone: true,
  imports: [
    AddressComponent,
    ContactInputComponent,
    FormsModule,
    NgForOf,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './section-moving.component.html',
  styleUrls: ['../section-taxi/section-taxi.component.css','./section-moving.component.css']
})
export class SectionMovingComponent extends RequestComponent{
  requestType: RequestType;

  loading: boolean | undefined;
  unloading: boolean | undefined;
  loadAndUnload: boolean | undefined;
  helpers: number | undefined;
  movingFromPropertyTypeFrom: PropertyType | undefined;
  movingFromPropertyTypeTo: PropertyType | undefined;
  moveRequestVehicleType: MoveRequestVehicleType | undefined;
  moveApplianceUpOrDown: boolean | undefined;
  hasSpecialItems: boolean | undefined;
  selectedOption: string | null = null;

  propertyTypes: PropertyType[] = Object.values(PropertyType);
  moveRequestVehicleTypes: MoveRequestVehicleType[] = [
    'Truck for 1 bedroom',
   'Truck for 2 bedrooms',
   'Truck for 3 bedrooms',
   'Truck for 4 bedrooms',
   'Other',
   'Not needed'];

  constructor() {
    super();
    this.requestType = RequestType.MOVING
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
  onToggleChange(toggle: string) {
    this.selectedOption = this.selectedOption === toggle ? null : toggle;
    this.loading = false;
    this.unloading = false;
    this.loadAndUnload = false;
    switch(toggle) {
      case 'loading':
        this.loading = true;
        break;
      case 'unloading':
        this.unloading = true;
        break;
      case 'both':
        this.loadAndUnload = true;
        break;
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
    console.log('after submit:', this.requestType);

    console.log('Form Submitted');
    console.log('Phone Number:', this.phoneNumber);
    console.log('Email Address:', this.emailAddress);
    console.log('Preferred Contact Method:', this.preferredContactMethod);
  }
}
