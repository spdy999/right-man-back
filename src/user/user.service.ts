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
    return users.map(user => user.toResponseObject(false));
  }

  async read(username: string): Promise<UserResponseObject> {
    const user = await this.userRepository.findOne<User>({
      where: { username },
    });
    // Logger.error(user);
    return user.toResponseObject(false);
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
    return user.toResponseObject(true);
  }
  async register(data: UserDTO): Promise<UserResponseObject> {
    const { username } = data;
    await this.checkExistUser(username);
    const user = await this.userRepository.create(data);
    return user.toResponseObject(true);
  }

  private async checkExistUser(username: string) {
    const user = await this.userRepository.findOne<User>({
      where: { username },
    });
    if (user) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }
  }
}
