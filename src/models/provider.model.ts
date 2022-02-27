import {Location} from './location.model';
import {CurrentLocation, User} from '.';

export interface Provider {
  serviceDuration: [string];
  debit: number;
  logo: string;
  providerName: string;
  user: User;
  deleted: boolean;
  createdAt: string;
  updatedAt: string;
  currentLocation: CurrentLocation;
  receivePushNotifications: boolean;
  id: number;
}
