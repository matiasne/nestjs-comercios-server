import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Movimiento } from 'src/movimientos/schema/movimiento.schema';

export type CajaDocument = Caja & Document;


@Schema({ timestamps: true })
export class Tipo{
    @Prop({ type: Boolean, default: false })
    habilitado: boolean

    @Prop({ type: Number, default: 0 })
    total: string
}

@Schema({ timestamps: true, strict:true })
export class Caja {
  
  @Prop({ type: String, required: true, unique: true })
  nombre: string;

  @Prop({ type: Array })
  movimientos: [Movimiento]

  @Prop({ type: Tipo, required: true })
  credito: Tipo

  @Prop({ type: Tipo, required: true })
  debito: Tipo

  @Prop({ type: Tipo, required: true })
  efectivo: Tipo

  @Prop({ type: String, required: true })
  estado: string

}

export const CajaSchema = SchemaFactory.createForClass(Caja);