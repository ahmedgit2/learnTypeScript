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
  vehicleTypes: [name: string];
  details: string;
  dropOffLocationDesc: string;
  dropOffLocation: {
    deleted: boolean;
    longitude: number;
    latitude: number;
  };
  dropOffCity: {
    country: string;
    governorate: {
      country: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      id: number;
    };
    name: string;
    createdAt: string;
    updatedAt: string;
    id: number;
  };
  pickUpLocationDesc: string;
  pickUpLocation: {
    deleted: boolean;
    longitude: number;
    latitude: number;
  };
  pickUpCity: {
    country: string;
    governorate: {
      country: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      id: number;
    };
    name: string;
    createdAt: string;
    updatedAt: string;
    id: number;
  };
  serviceType: string;
  country: {
    name: string;
    createdAt: string;
    updatedAt: string;
    id: string;
  };
  client: {
    blocked: boolean;
    rate: number;
    user: {
      country: string;
      profileImg: {
        original: string;
        thumbnail: string;
      };
      phone: string;
      name: string;
      testingAccount: boolean;
      deleted: boolean;
      createdAt: string;
      updatedAt: string;
      email: string;
      id: number;
    };
    deleted: boolean;
    createdAt: string;
    updatedAt: string;
    id: number;
  };
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
