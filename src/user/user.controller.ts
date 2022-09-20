import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Patch,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  getUser() {
    return this.userService.get();
  }

  @Post()
  store(@Body() createUserDTO: CreateUserDTO) {
    return this.userService.create(createUserDTO);
  }

  @Patch('/:userId')
  update(
    @Body() updateDTO: UpdateUserDTO,
    @Param('userId', ParseIntPipe) userId: number,
  ) {
    return this.userService.update(updateDTO, userId);
  }

  @Get('/:userId')
  getUserId(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.showId(userId);
  }

  @Delete('/:userId')
  deleteUserId(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.delete(userId);
  }
}
