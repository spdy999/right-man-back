import { Idea } from 'src/idea/idea.entity';

export interface UserResponseObject {
  id: number;
  created: Date;
  email: string;
  token?: string;
  ideas?: Idea[];
}
export interface UserDTO {
  email: string;
  password: string;
}
