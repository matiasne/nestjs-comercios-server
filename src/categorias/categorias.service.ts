import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comercio, ComercioDocument } from 'src/comercios/schema/comercio.schema';
import { Producto, ProductoDocument } from 'src/productos/schema/producto.schema';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { Categoria, CategoriaDocument } from './schema/categoria.schema';

@Injectable()
export class CategoriasService {

  private readonly logger = new Logger(CategoriasService.name);
  
  constructor(
    @InjectModel(Comercio.name) private comercioModel: Model<ComercioDocument>,
    @InjectModel(Producto.name) private prodcutoModel: Model<ProductoDocument>
    ) {}
  

  async doesCategoriaExists(comercioId,createCategoriaDto: CreateCategoriaDto){
    let categoria = await this.findOneByNombre(comercioId,createCategoriaDto.nombre);
    this.logger.log(categoria)
    if(categoria){
        return true;
    }
    return false;
  }

  async create(comercioId,createCategoriaDto: CreateCategoriaDto){    

    if (!comercioId.match(/^[0-9a-fA-F]{24}$/)) {
      return false
    }

    let comercio = await this.comercioModel.findById(comercioId).exec();
    comercio.categorias.push(createCategoriaDto);
    return comercio.save();

  }

  async findAll(comercioId:string){

    if (!comercioId.match(/^[0-9a-fA-F]{24}$/)) {
      return false
    }

    let comercio = await this.comercioModel.findById(comercioId).exec();
  
    if(!comercio){
      return false
    }
    return comercio.categorias;
  }

  async findOneByNombre(comercioId:string, nombre:string){

    if (!comercioId.match(/^[0-9a-fA-F]{24}$/)) {
      return false
    }

    let comercio = await this.comercioModel.find({_id:comercioId}).exec();       
    return comercio[0].categorias.find(element => element['nombre'] == nombre);    
  }

  async findOne(comercioId:string,id: string) {   

    if (!comercioId.match(/^[0-9a-fA-F]{24}$/)) {
      return false
    }

    let comercio = await this.comercioModel.findById(comercioId).exec();  
    
    if(!comercio){
      return false;
    }
    
    return comercio.categorias.find(element => element['_id'] == id);    
  }

  async findProductos(comercioId,categoriaId){
    return this.prodcutoModel.find({categoriasId:categoriaId}).exec()
  }

  async update(comercioId:string,id: string, updateCategoriaDto: UpdateCategoriaDto) {

    if (!comercioId.match(/^[0-9a-fA-F]{24}$/)) {
      return false
    }

    let comercio = await this.comercioModel.findById(comercioId).exec();   
    
    if(!comercio){
      return false;
    }

    let categoria = comercio.categorias.find(element => element['_id'] == id);
    this.logger.log(categoria)
    if(!categoria){
      return false;
    }
    
    Object.assign(categoria, updateCategoriaDto);
    comercio.save()    

    return true;
    
  }

  async remove(comercioId:string,id: string) {

    if (!comercioId.match(/^[0-9a-fA-F]{24}$/)) {
      return false
    }

    let comercio = await this.comercioModel.findById(comercioId).exec();
      
    if(!comercio){
      return false;
    }

    let index = comercio.categorias.findIndex(element => element['_id'] == id);

    if(index == -1){
      return false;
    }

    comercio.categorias.splice(index,1);
    comercio.save();
    return true;
       
  }
}
