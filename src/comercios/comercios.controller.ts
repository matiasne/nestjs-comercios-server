import { Controller, Request, Get, Post, Body, Patch, Param, Delete, UseGuards, UseFilters, HttpException, HttpStatus } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { LocalAuthGuard } from 'src/auth/guards/local-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Role } from 'src/auth/role.enum';
import { Roles } from 'src/auth/roles.decorator';
import { ComerciosService } from './comercios.service';
import { CreateComercioDto } from './dto/create-comercio.dto';
import { UpdateComercioDto } from './dto/update-comercio.dto';
import { MongoExceptionFilter } from './mongo-exception-comercios.filter';

@Controller('comercios')
@UseGuards(JwtAuthGuard)
@UseFilters(MongoExceptionFilter)
export class ComerciosController {
  constructor(private readonly comerciosService: ComerciosService) {}

  @Post()
  create(@Request() req:any, @Body() createComercioDto: CreateComercioDto) {
    return this.comerciosService.create(req.user,createComercioDto);
  }

  @Post('/seleccionar')
  async seleccionar(@Request() req:any, @Body() body){

    let response = await this.comerciosService.seleccionar(req.user,body);
    if(!response){
      throw new HttpException("El comercio"+body.comercioId+" no existe" , HttpStatus.UNPROCESSABLE_ENTITY);
    }
    else{
      return response
    }    
  }

  @Get()
  findAll() {
    return this.comerciosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.comerciosService.findOne(id);
  }

  @Patch(':id')
  @Roles(Role.Admin) //No hay roles en  
  update(@Param('id') id: string, @Body() updateComercioDto: UpdateComercioDto) {
    return this.comerciosService.update(id, updateComercioDto);
  }

  @Delete(':id')
  @Roles(Role.Admin) //No hay roles en  
  remove(@Param('id') id: string) {
    return this.comerciosService.remove(id);
  }
}
