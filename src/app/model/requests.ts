export interface Address {
  formattedAddress: string;
  lat: string;
  lng: string;
}

export interface TaxiRequest {
  fromAddress: Address;
  toAddress: Address;
  fromTime: string; // Use ISO string format
  toTime: string; // Use ISO string format
  requestVehicleType: TaxiRequestVehicleType;
}

export type MoveRequestVehicleType =
    'Truck for 1 bedroom'
  | 'Truck for 2 bedrooms'
  | 'Truck for 3 bedrooms'
  | 'Truck for 4 bedrooms'
  | 'Other'
  | 'Not needed';

export type TaxiRequestVehicleType =
   'SEDAN'
  | 'SUV'
  | 'MINIVAN'
  | 'VAN';

export enum RequestType {
  TAXI = 'TAXI',
  MOVING = 'MOVING',
  HOUSE_CLEANING = 'HOUSE_CLEANING',
  DEEP_CLEANING = 'DEEP_CLEANING'
}
export enum PropertyType {
  APARTMENT='APARTMENT',
  CONDO = 'CONDO',
  SINGLE_FAMILY = 'SINGLE_FAMILY',
  TOWNHOUSE = 'TOWNHOUSE',
  MULTIFAMILY = 'MULTIFAMILY',
  OTHER = 'OTHER'
}
