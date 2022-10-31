import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import jwt_decode from 'jwt-decode';

export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();

    const position = request.rawHeaders.indexOf('Authorization');
    const req = request.rawHeaders[position + 1].slice(8, -1);

    const decoded: any = jwt_decode(req);

    return decoded.id;
  },
);
