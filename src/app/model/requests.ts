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
  requestedVehicleType: VehicleType;
}

export type VehicleType =
  | 'SEDAN'
  | 'SUV'
  | 'MINIVAN'
  | 'VAN'
  | 'PICKUP'
  | 'TRUCK_1B1B'
  | 'TRUCK_2B2B'
  | 'TRUCK_3B3B'
  | 'TRUCK_4B4B';
