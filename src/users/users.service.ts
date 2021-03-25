import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Role } from 'src/auth/role.enum';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schemas/user.schema';


@Injectable()
export class UsersService {

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  
  create(createUserDto: CreateUserDto): Promise<User> {
    const createdCat = new this.userModel(createUserDto);
    return createdCat.save()   
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  findOneByNombre(nombre:string) {
    var user = this.userModel.findOne({username: nombre}).exec();
    return user;
  }

  findOne(id:string){
    var user = this.userModel.findOne({id: id}).exec();
    return user;
  }

  update(id:string, updateCategoriaDto: UpdateUserDto) {
    return `This action updates a #${id} categoria`;
  }

  remove(id:string) {
    return `This action removes a #${id} categoria`;
  }

}