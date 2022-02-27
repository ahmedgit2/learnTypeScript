import {VehicleModel, VehicleType, Provider} from '.';
export interface ProviderVehicles {
  plateNumber: string;
  chassisNumber: string;
  active: boolean;
  verified: boolean;
  vehicleImages: [string];
  vehicleLicense: [string];
  productionYear: number;
  vehicleModel: VehicleModel;
  vehicleType: VehicleType;
  provider: Provider;
  deleted: boolean;
  createdAt: string;
  updatedAt: string;
  id: number;
}
