import { Component } from '@angular/core';
import {RequestComponent} from '../request.component';
import {PropertyType, RequestType} from '../../model/requests';
import {AddressComponent} from '../address/address.component';
import {FormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';
import {SectionHouseCleaningComponent} from '../section-house-cleaning/section-house-cleaning.component';

@Component({
  selector: 'app-section-deep-cleaning',
  standalone: true,
  imports: [
    AddressComponent,
    FormsModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './section-deep-cleaning.component.html',
  styleUrls: ['../section-taxi/section-taxi.component.css','./section-deep-cleaning.component.css']

})
export class SectionDeepCleaningComponent extends SectionHouseCleaningComponent{
  carpetDeepClean: boolean | undefined;
  hardwoodDeepClean: boolean | undefined;
  dryerDedusting: boolean | undefined;
  pressureWash: boolean | undefined;

  constructor() {
    super();
    this.requestType = RequestType.DEEP_CLEANING
  }


}
