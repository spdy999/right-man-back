import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
// import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class AuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    Logger.error('AuthGuard');
    const request = context.switchToHttp().getRequest();
    if (!request.headers.authorization) {
      return false;
    }
    request.user = await this.validateToken(request.headers.authorization);
    return true;
    // else {
    //   const ctx: any = GqlExecutionContext.create(context);
    //   Logger.error(ctx.args);
    //   if (!ctx.headers.authorization) {
    //     return false;
    //   }
    //   ctx.user = await this.validateToken(ctx.headers.authorization, request);
    //   return true;
    // }
  }

  async validateToken(auth: string) {
    if (auth.split(' ')[0] !== 'Bearer') {
      throw new HttpException('Invalid token', HttpStatus.FORBIDDEN);
    }

    const token = auth.split(' ')[1];

    try {
      // TODO: JWT_SECRET should be like this?
      const decoded = await jwt.verify(
        token,
        process.env.JWT_SECRET || 'SECRET',
      );

      return decoded;
    } catch (err) {
      const message = 'Token error: ' + (err.message || err.name);
      throw new HttpException(message, HttpStatus.FORBIDDEN);
    }
  }
}
