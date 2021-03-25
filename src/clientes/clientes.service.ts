import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente, ClienteDocument } from './schema/cliente.schema';

@Injectable()
export class ClientesService {
  private readonly logger = new Logger(ClientesService.name);

  constructor(
    @InjectModel(Cliente.name) private clienteModel: Model<ClienteDocument>
  ) {}

  create(comercioId,createClienteDto: CreateClienteDto) {
    createClienteDto["comercioId"] = comercioId;
    this.logger.log(createClienteDto)
    const createdCliente = new this.clienteModel(createClienteDto);
    return createdCliente.save();
  }

  findAll(comercioId) {
   return this.clienteModel.find({comercioId:comercioId}).exec()
  }

  findOne(id: string) {
    return this.clienteModel.findById(id)
  }

  async update(id: string, updateClienteDto: UpdateClienteDto) {
    let prod = new Cliente();
    Object.assign(prod, updateClienteDto);
    let com = await this.clienteModel.updateOne({_id:id},prod)
    return com;
  }

  remove(id: string) {
    return this.clienteModel.remove({_id:id})
  }
}
