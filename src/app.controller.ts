import { Controller, Request, Post, UseGuards, Get, Body } from '@nestjs/common';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { CreateUserDto } from './users/dto/create-user.dto';
import { NewUserDto } from './users/dto/new-user.dto';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}
  
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req:any ) {
    return this.authService.login(req.user);
  }  

  @Post('signup')
  async signup(@Body() newUserDto: NewUserDto) {   
    return await this.authService.signup(newUserDto);
  }
  
}