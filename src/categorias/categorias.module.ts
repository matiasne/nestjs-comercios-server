import { Module } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { CategoriasController } from './categorias.controller';
import { Categoria, CategoriaSchema } from './schema/categoria.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Comercio, ComercioSchema  } from 'src/comercios/schema/comercio.schema';
import { Producto, ProductoSchema } from 'src/productos/schema/producto.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Categoria.name, schema: CategoriaSchema }]),
    MongooseModule.forFeature([{ name: Comercio.name, schema: ComercioSchema }]),
    MongooseModule.forFeature([{ name: Producto.name, schema: ProductoSchema }])
  
  ],
  controllers: [CategoriasController],
  providers: [CategoriasService]
})
export class CategoriasModule {}
