import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseFilters, UsePipes, ValidationPipe, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Role } from 'src/auth/role.enum';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { CategoriasService } from './categorias.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

@Controller('comercios/:comercioId/categorias')

export class CategoriasController {
  constructor(private readonly categoriasService: CategoriasService) {}

  private readonly logger = new Logger(CategoriasController.name);
  
  @Post()   
  @Roles(Role.Admin) //No hay roles en 
  @UseGuards(JwtAuthGuard,RolesGuard)
  async create(@Body() createCategoriaDto: CreateCategoriaDto,@Param('comercioId') comercioId) {

    //Esto debo hacerlo porque mongoose no detecta unique en subdocumentos así que lo hago manualmente
    let exist = await this.categoriasService.doesCategoriaExists(comercioId,createCategoriaDto);
    this.logger.log(exist)
    if(exist){
      throw new HttpException("La categoria "+createCategoriaDto.nombre+" ya existe" , HttpStatus.CONFLICT);
    }
    return this.categoriasService.create(comercioId,createCategoriaDto)
    
  }

  @Get()  
  async findAll(@Param('comercioId') comercioId) { 
    this.logger.log("!!!!")  
    let categorias = await this.categoriasService.findAll(comercioId)
    if(!categorias){
      throw new HttpException("El comercio no existe" , HttpStatus.CONFLICT);
    }
    return categorias    
  }

  @Get(':id')
  async findOne(@Param('comercioId') comercioId,@Param('id') id: string) {
    let categoria = await this.categoriasService.findOne(comercioId,id);
    this.logger.log(categoria)
    if(categoria){
      return categoria;
    }
    else{
      throw new HttpException("La categoria no existe" , HttpStatus.CONFLICT);
    }
  }

  @Get(':id/productos')
  async findProductos(@Param('comercioId') comercioId,@Param('id') id: string) {
    let productos = await this.categoriasService.findProductos(comercioId,id);  
    if(productos){
      return productos;
    }
    else{
      throw new HttpException("La categoria no existe" , HttpStatus.CONFLICT);
    }
  }

  @Patch(':id')
  @Roles(Role.Admin)
  @UseGuards(JwtAuthGuard,RolesGuard)
  async update(@Param('comercioId') comercioId,@Param('id') id: string, @Body() updateCategoriaDto: UpdateCategoriaDto) {
    if(!await this.categoriasService.update(comercioId,id, updateCategoriaDto)){
      throw new HttpException("No se pudo actualizar, categoria o comercio no existen" , HttpStatus.CONFLICT);
    }
  }

  @Delete(':id')  
  @Roles(Role.Admin)
  @UseGuards(JwtAuthGuard,RolesGuard)
  async remove(@Param('comercioId') comercioId,@Param('id') id: string) {    
    if(!await this.categoriasService.remove(comercioId,id)){
      throw new HttpException("No se pudo actualizar, categoria o comercio no existen" , HttpStatus.CONFLICT);
    }    
  }
}
