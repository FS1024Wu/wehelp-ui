import {Component, Input, Output, EventEmitter, AfterViewInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Address} from '../../model/requests';

@Component({
  selector: 'app-address-autocomplete',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent implements AfterViewInit    {
  @Input() id: string = 'default-address-id'; // Default id
  @Input() customPlaceholder: string = 'Enter an address'; // Placeholder text
  @Output() addressSelected = new EventEmitter<any>();

  async ngAfterViewInit(): Promise<void> {
    console.log('After view init:', this.id);

    //@ts-ignore
    await google.maps.importLibrary("places") as google.maps.PlacesLibrary;
    // Create the input HTML element, and append it.
    //@ts-ignore
    const placeAutocomplete = new google.maps.places.PlaceAutocompleteElement();
    //@ts-ignore
    document.getElementById(this.id)?.appendChild(placeAutocomplete);

    // Inject HTML UI.
    const selectedPlaceTitle = document.createElement('p');
    selectedPlaceTitle.textContent = '';
    document.getElementById(this.id)?.appendChild(selectedPlaceTitle);

    const selectedPlaceInfo = document.createElement('pre');
    selectedPlaceInfo.textContent = '';
    document.getElementById(this.id)?.appendChild(selectedPlaceInfo);

    // Add the gmp-placeselect listener, and display the results.
    //@ts-ignore
    placeAutocomplete.addEventListener('gmp-placeselect', async ({ place }) => {
      await place.fetchFields({ fields: ['formattedAddress', 'location'] });
      console.log('Place:', place);
      if (place.formattedAddress && place.location) {
        // Construct the Address object
        const address: Address = {
          formattedAddress: place.formattedAddress,
          lat: place.location.lat().toString(),
          lng: place.location.lng().toString(),
        };
        console.log('Address:', address);
        // Emit the constructed Address object
        this.addressSelected.emit(address);
      } else {
        console.error('Place is missing required fields.');
      }

    });

  }


  onInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement?.value || '';
    console.log('Input value:', value);
  }
}
