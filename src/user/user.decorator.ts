import { createParamDecorator, Logger } from '@nestjs/common';

export const User = createParamDecorator((data, req) => {
  Logger.error(req.user);
  return data ? req.user[data] : req.user;
});
