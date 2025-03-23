import { Component } from '@angular/core';
import {RequestComponent} from '../request.component';
import {Address, MoveRequestVehicleType, PropertyType, RequestType} from '../../model/requests';
import {AddressComponent} from '../address/address.component';
import {FormsModule, NgForm, ReactiveFormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-section-moving',
  standalone: true,
  imports: [
    AddressComponent,
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
      this.departureLocation = address;
      console.log('Departure Location:', this.departureLocation);
    } else if (type === 'to') {
      this.destinationLocation = address;
      console.log('Destination Location:', this.destinationLocation);
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
      this.inputDepartureLocation = this.inputDepartureLocation + value;
    } else if (type === 'to') {
      this.inputDestinationLocation = this.inputDestinationLocation + value;
    }
  }
  onSubmit(form: NgForm): void {
    console.log(form.value);
    console.log('Submitted Departure Location:', this.departureLocation);
    console.log('Submitted Destination Location:', this.destinationLocation);
    console.log('Submitted inputDepartureLocation:', this.inputDepartureLocation);
    console.log('Submitted inputDestinationLocation:', this.inputDestinationLocation);
    console.log('after submit:', this.requestType);
  }
}
