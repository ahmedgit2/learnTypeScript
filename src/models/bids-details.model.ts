import {City, Client, Country, Location, VehicleType} from '.';

export interface BidsDetails {
  id: number;
  orderType: string;
  type: string;
  executionDate: string;
  viewsCount: number;
  appFeesRate: number;
  vatRate: number;
  status: string;
  targetProviders: {};
  expectedPrice: string;
  needCooling: boolean;
  canBeBroken: boolean;
  expectedWeight: string;
  vehicleTypes: VehicleType[];
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
  acceptedOffer: any;
  transportationOrder: any;
  distanceFromPickupInKm: any;
  offersCount: number;
  offerReceivedDate: any;
  offerAcceptedDate: any;
  promoCode: any;
  hasOffered: boolean;
}
