import { Controller, Body, Post } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Controller('auth')
export class AuthController {
  constructor(private userService: UserService) {}

  @Post('/login')
  login(@Body() loginDto: any) {
    return this.userService.findByEmail(loginDto.email);
  }
}
