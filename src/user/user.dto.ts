export interface UserResponseObject {
  id: number;
  created: Date;
  username: string;
  token?: string;
}
export interface UserDTO {
  username: string;
  password: string;
}
