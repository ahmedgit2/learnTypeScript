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
  vehicleTypes: [
    {
      _id: [];
      typeImage: string;
      category: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    },
  ];
  details: string;
  dropOffLocationDesc: string;
  dropOffLocation: {
    deleted: boolean;
    longitude: number;
    latitude: number;
  };
  dropOffCity: {
    country: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    id: number;
    governorate: {
      country: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      id: number;
    };
  };
  pickUpLocationDesc: string;
  pickUpLocation: {
    deleted: false;
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
      id: number;
    };
    deleted: false;
    createdAt: string;
    updatedAt: string;
    id: number;
  };
  createdAt: string;
  updatedAt: string;
  distanceFromPickupInKm: number;
  offersCount: number;
  offerReceivedDate: any;
  offerAcceptedDate: any;
  promoCode: any;
}