export interface User {
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
}
