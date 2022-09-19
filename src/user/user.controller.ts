import {
  Controller,
  Get,
  Post,
  Req,
  Delete,
  Param,
  Patch,
} from '@nestjs/common';
import { Request } from 'express';

@Controller('/user')
export class UserController {
  @Get()
  getUser() {
    return { name: 'Abhishek', email: 'abhishek@test.com' };
  }

  @Post()
  store(@Req() req: Request) {
    return req.body;
  }

  @Patch('/:userId')
  update(@Req() req: Request) {
    return req.body;
  }

  @Get('/:userId')
  getUserId(@Param() params: { userId: number }) {
    return params;
  }

  @Delete('/:userId')
  deleteUserId(@Param() params: { userId: number }) {
    return params;
  }
}
