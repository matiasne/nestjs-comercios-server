import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Rol } from 'src/roles/schema/rol.schema';
import { CreateComercioDto } from './dto/create-comercio.dto';
import { UpdateComercioDto } from './dto/update-comercio.dto';
import { Comercio, ComercioDocument } from './schema/comercio.schema';

@Injectable()
export class ComerciosService {

  private readonly logger = new Logger(ComerciosService.name);
  
  constructor(
    @InjectModel(Comercio.name) private comercioModel: Model<ComercioDocument>,
    private jwtService: JwtService,
  ) {}

  async doesComercioExists(createComercioDto: CreateComercioDto): Promise<boolean> {
    const comercio = await this.findOneByNombre(createComercioDto.nombre);
    if(comercio){
        return true;
    }
    return false;
  }


  async create(user:any,createComercioDto: CreateComercioDto): Promise<Comercio> {
    
    let rol = new Rol()   
    
    rol.userId = user.userId
    rol.rol = "Admin"
    rol.estado ="Aceptado"
    
    createComercioDto["roles"] = [rol];
    //createComercioDto.roles.push(rol);
    this.logger.log(createComercioDto)

    const createdComercio = new this.comercioModel(createComercioDto);
    return createdComercio.save();
  }

  async seleccionar(user:any,body){
    let comercio = await this.findOne(body.comercioId);   
    if(!comercio){
     return false
    }  

    const result:any = comercio.roles.filter(rol => rol.userId === user.userId);

    if(!result){
      return false
    }

    const payload = { username: user.username, sub: user.userId, comercioId: body.comercioId, rol:result[0].rol}; 
    return {
      access_token: this.jwtService.sign(payload),
    };    
  }

  findAll() {
    return `This action returns all comercios`;
  }

  findOneByNombre(nombre:string){
    var comercio = this.comercioModel.findOne({nombre: nombre}).exec();
    return comercio;
  }

  findOne(id) {

    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return false
    }
    
    var comercio = this.comercioModel.findById(id).exec();
    return comercio;
  }

  async update(id: string, updateComercioDto: UpdateComercioDto) {
    let comercio = new Comercio();
    Object.assign(comercio, updateComercioDto);
    let com = await this.comercioModel.updateOne({_id:id},comercio)
    return com;
  }

  remove(id:string) {
    return this.comercioModel.remove({_id:id})
  }
}
