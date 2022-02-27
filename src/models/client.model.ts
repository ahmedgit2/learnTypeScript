import {User} from './user.model';
export interface Client {
  blocked: boolean;
  rate: number;
  user: User;
  deleted: boolean;
  createdAt: string;
  updatedAt: string;
  id: number;
}
