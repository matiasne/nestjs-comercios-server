import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto, ProductoDocument } from './schema/producto.schema';

@Injectable()
export class ProductosService {

  private readonly logger = new Logger(ProductosService.name);

  constructor(
    @InjectModel(Producto.name) private productoModel: Model<ProductoDocument>
  ) {}

  create(comercioId,createProductoDto: CreateProductoDto) {
    createProductoDto["comercioId"] = comercioId;
    this.logger.log(createProductoDto)
    const createdComercio = new this.productoModel(createProductoDto);
    return createdComercio.save();
  }

  findAll(comercioId) {
   return this.productoModel.find({comercioId:comercioId}).exec()
  }

  findOne(id: string) {
    return this.productoModel.findById(id)
  }

  async update(id: string, updateProductoDto: UpdateProductoDto) {
    let prod = new Producto();
    Object.assign(prod, updateProductoDto);
    let com = await this.productoModel.updateOne({_id:id},prod)
    return com;
  }

  remove(id: string) {
    return this.productoModel.remove({_id:id})
  }
}
