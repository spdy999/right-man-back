import { Product } from '../product/product.entity';

export interface UserResponseObject {
  id: number;
  created: Date;
  email: string;
  token?: string;
  products?: Product[];
}
export interface UserDTO {
  email: string;
  password: string;
}
