import {
  Injectable,
  Inject,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { User } from './user.entity';
import { USER_REPOSITORY } from './user.constant';
import { UserResponseObject, UserDTO } from './user.dto';

@Injectable()
export class UserService {
  constructor(@Inject(USER_REPOSITORY) private userRepository: typeof User) {}

  async showAll(): Promise<UserResponseObject[]> {
    const users = await this.userRepository.findAll<User>();
    return users.map(user => user.toResponseObject());
  }

  async login(data: UserDTO): Promise<UserResponseObject> {
    const { username, password } = data;
    const user = await this.userRepository.findOne<User>({
      where: { username },
    });
    if (!user || !(await user.comparePassword(password))) {
      throw new HttpException(
        'Invalid username/password',
        HttpStatus.BAD_REQUEST,
      );
    }
    return user.toResponseObject();
  }
  async register(data: UserDTO): Promise<UserResponseObject> {
    const { username } = data;
    // this.checkExistUser(username);
    const user = await this.userRepository.findOne<User>({
      where: { username },
    });
    if (user) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }
    const user2 = await this.userRepository.create(data);
    return user2.toResponseObject();
  }

  // TODO: FIX throw exception but request not stop
  private async checkExistUser(username: string) {
    const user = await this.userRepository.findOne<User>({
      where: { username },
    });
    if (user) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }
  }
}
