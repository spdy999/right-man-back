import { Idea } from 'src/idea/idea.entity';

export interface UserResponseObject {
  id: number;
  created: Date;
  username: string;
  token?: string;
  ideas?: Idea[];
}
export interface UserDTO {
  username: string;
  password: string;
}
