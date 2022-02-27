import {City} from './city.model';
import {Client, Country, Location, VehicleType} from '.';
export interface Bid {
  id: number;
  orderType: string;
  type: string;
  executionDate: string;
  viewsCount: number;
  appFeesRate: number;
  vatRate: number;
  status: string;
  expectedPrice: string;
  needCooling: boolean;
  canBeBroken: boolean;
  expectedWeight: string;
  vehicleTypes: VehicleType;
  details: string;
  dropOffLocationDesc: string;
  dropOffLocation: Location;
  dropOffCity: City;
  pickUpLocationDesc: string;
  pickUpLocation: Location;
  pickUpCity: City;
  serviceType: string;
  country: Country;
  client: Client;
  createdAt: string;
  updatedAt: string;
  distanceFromPickupInKm: number;
  offersCount: number;
  offerReceivedDate: any;
  offerAcceptedDate: any;
  promoCode: any;
}
