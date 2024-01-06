import { Body, Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/CreateUser.dto';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return [{ user: 'user' }];
  }

  @Post('create')
  postUser(@Body() userData: CreateUserDto) {
    console.log(userData.username);
    return {};
  }
  @Get(':id')
  getUserById(@Param('id') id: string){
    console.log(id)
    return(id)
  }
}
