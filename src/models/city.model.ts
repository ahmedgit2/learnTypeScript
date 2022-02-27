import {Governorate} from '.';

export interface City {
  country: string;
  governorate: Governorate;
  name: string;
  createdAt: string;
  updatedAt: string;
  id: number;
}
