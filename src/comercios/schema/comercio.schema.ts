import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Caja } from 'src/cajas/schema/caja.schema';
import { Categoria } from 'src/categorias/schema/categoria.schema';
import { Cliente } from 'src/clientes/schema/cliente.schema';
import { Cocina } from 'src/cocinas/schema/cocina.schema';
import { CtaCorriente } from 'src/ctas-corrientes/schema/cta-corriente.schema';
import { Direccion } from 'src/direcciones/schema/direccion.schema';
import { Mesa } from 'src/mesas/schema/mesa.schema';
import { Pedido } from 'src/pedidos/schema/pedido.schema';
import { Rol } from 'src/roles/schema/rol.schema';
import { Document } from 'mongoose';
import { Producto } from 'src/productos/entities/producto.entity';
import { GrupoOpciones } from 'src/grupo-opciones/schema/grupos-opciones.schema';

export type ComercioDocument = Comercio & Document;

/*
@Schema({ timestamps: true })
export class Movimiento{

    @Prop({ type: MongooseSchema.Types.ObjectId , ref: 'User'})
    createdBy: [Types.ObjectId];

    @Prop({ type: String, required: true })
    clienteId: string

    @Prop({ type: String, required: true })
    createdAt: string

    @Prop({ type: String, required: true })
    ctaCorrienteId: string

    @Prop({ type: String, required: true })
    depositoId: string

    @Prop({ type: String, required: true })
    extraccionId: string

    @Prop({ type: String, required: true })
    isApertura: string

    @Prop({ type: String, required: true })
    isCierre: string

    @Prop({ type: String, required: true })
    metodoDePago: string

    @Prop({ type: String, required: true })
    monto: string

    @Prop({ type: String, required: true })
    motivo: string

    @Prop({ type: String, required: true })
    pagareId: string

    @Prop({ type: String, required: true })
    servicioId: string

    @Prop({ type: String, required: true })
    vendedorId: string

    @Prop({ type: String, required: true })
    vendedorNombre: string

    @Prop({ type: String, required: true })
    ventaId: string

}




@Schema({ timestamps: true })
export class Opcion {

    @Prop({ type: String, required: true })
    nombre: string;

    @Prop({ type: Boolean, default: false })
    habilitado: boolean

    @Prop({ type: Number, default: 0 })
    precioVariacion: number

    @Prop({ type: Number, default: 1 })
    maximo: number

}


@Schema({ timestamps: true })
export class GrupoOpciones {

    @Prop({ type: String, required: true })
    nombre: string;

    @Prop({ type: Boolean, default: false })
    habilitado: boolean

    @Prop({ type: Number, default: 0 })
    minimo: number

    @Prop({ type: Number, default: 1 })
    maximo: number

    @Prop({ type: Opcion, default: 1 })
    opciones: [Opcion]
}

@Schema({timestamps:true})
export class Mesa{
    @Prop({type:String,required:true})
    nombre:string
}

@Schema({timestamps:true})
export class ProductoSeleccionado{
    @Prop({type:Number,required:true})
    cantidad:number

    @Prop({type:Cocina,required:true})
    cocina:Cocina

    @Prop({type:String,required:true})
    descripcion:string

    @Prop({type:String,required:true})
    estadoComanda:string

    @Prop({type:Opcion,required:true})
    OpcionesSeleccionadas:Opcion

    @Prop({type:Number,required:true})
    precioTotal:Number
}


@Schema({timestamps:true})
export class Pedido{
    @Prop({type:Cliente})
    cliente:Cliente

    @Prop({type:Mesa})
    mesa:Mesa

    @Prop({type:User})
    personal:User

    @Prop({type:ProductoSeleccionado})
    productos:ProductoSeleccionado

    @Prop({type:Boolean,default:false})
    cobrado:boolean

    @Prop({type:Boolean,default:false})
    suspendido:boolean

    @Prop({type:Number,default:false})
    statusComanda:number

    @Prop({type:Number,default:false})
    total:number
}*/

@Schema({ timestamps: true})
export class Comercio {

    @Prop({ type: String, required: true, unique: true })
    nombre: string;

    @Prop({ type: Direccion})
    direccion: Direccion
 
    @Prop({ type: [],required:true })
    roles: Rol[];        

    @Prop([Categoria])
    categorias: Categoria[];
  
    @Prop([Caja])
    cajas: Caja[]   

    @Prop([Cocina])
    cocinas: Cocina[];    

    @Prop([GrupoOpciones])
    grupoOpciones: GrupoOpciones[];

    @Prop([Mesa])
    mesas: Mesa[];   

}

export const ComercioSchema = SchemaFactory.createForClass(Comercio);

