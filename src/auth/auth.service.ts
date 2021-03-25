import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../users/schemas/user.schema';
import { NewUserDto } from 'src/users/dto/new-user.dto';

@Injectable() 
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  //  @InjectModel(User.name) private userModel: Model<UserDocument>
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
        
    const user = await this.usersService.findOneByNombre(username);
    if (!user){
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    else{
      const isMatch = await bcrypt.compare(pass, user.passwordHash);
      if (user && isMatch) {
        const {passwordHash, ...result } = user;
        return result;
      }
      else{
        throw new HttpException('Password error', HttpStatus.UNPROCESSABLE_ENTITY);
      }
    }    
  }

  async signup(newUserDto:NewUserDto ) {
      
    let userExist = await this.usersService.findOneByNombre(newUserDto.username);

    if(userExist){
      throw new HttpException('This user name is already in use: '+newUserDto.username , HttpStatus.UNPROCESSABLE_ENTITY);
    }
      

    if(newUserDto.password === newUserDto.confirmpass){
      
      var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

      if(!regex.test(newUserDto.password)){
        throw new HttpException('Lac ontraseña no cumple con las caracteristicas: Debe contener entre 6 y 15 caracteres. Debe contener un caracter especial. Debe contener una leta mayúscula. Debe contener un número. No debe contener espacios.' , HttpStatus.UNPROCESSABLE_ENTITY);
      }

      let createUserDto = new CreateUserDto();
      createUserDto.username = newUserDto.username;
      createUserDto.passwordHash =  bcrypt.hashSync(newUserDto.password, 10);
      await this.usersService.create(createUserDto);     
    }
    else{
      throw new HttpException('La contraseña y la confirmación de la misma no coinciden', HttpStatus.UNPROCESSABLE_ENTITY);
    }   
  }

  async login(data: any) { 
    const payload = { username: data._doc.username, sub: data._doc._id}; 
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

}
