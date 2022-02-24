export interface ProviderVehicles {
  plateNumber: string;
  chassisNumber: string;
  active: boolean;
  verified: boolean;
  vehicleImages: [string];
  vehicleLicense: [string];
  productionYear: number;
  vehicleModel: {
    vehicleBrand: {
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
  vehicleType: {
    typeImage: string;
    category: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    id: number;
  };
  provider: {
    serviceDuration: [string];
    debit: number;
    logo: string;
    providerName: string;
    user: {
      profileImg: {
        original: string;
        thumbnail: string;
      };
      name: string;
      testingAccount: boolean;
      deleted: boolean;
      createdAt: string;
      updatedAt: string;
      country: string;
    };
    deleted: boolean;
    createdAt: string;
    updatedAt: string;
    currentLocation: {
      coordinates: [number, number];
      type: string;
      deleted: boolean;
    };
    receivePushNotifications: boolean;
    id: number;
  };
  deleted: boolean;
  createdAt: string;
  updatedAt: string;
  id: number;
}
