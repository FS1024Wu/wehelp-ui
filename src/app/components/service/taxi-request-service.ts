import { Injectable } from '@angular/core';
import { TaxiRequest, Address } from '../../model/requests';

@Injectable({
  providedIn: 'root',
})
export class TaxiRequestService {
  getToday(): string {
    const currentDate = new Date();
    return currentDate.toISOString().split('T')[0]; // Returns "YYYY-MM-DD"
  }

  prepareTaxiRequest(
    fromAddress: Address,
    toAddress: Address,
    fromDate: string,
    fromHour: string,
    fromMinute: string,
    toDate: string,
    toHour: string,
    toMinute: string,
    vehicleType: string
  ): TaxiRequest {
    return {
      fromAddress,
      toAddress,
      fromTime: `${fromDate}T${fromHour}:${fromMinute}:00`,
      toTime: `${toDate}T${toHour}:${toMinute}:00`,
      requestedVehicleType: vehicleType as TaxiRequest['requestedVehicleType'],
    };
  }
}
