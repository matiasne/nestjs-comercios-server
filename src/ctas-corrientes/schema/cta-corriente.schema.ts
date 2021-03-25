
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Cliente } from 'src/clientes/schema/cliente.schema';
import { Movimiento } from 'src/movimientos/schema/movimiento.schema';
import { User } from 'src/users/schemas/user.schema';
import { SchemaTypes, Types, Document } from "mongoose";

export type CocinaDocument = CtaCorriente & Document;

@Schema({ timestamps: true, strict:true })
export class CtaCorriente {

    @Prop({ type: Array,required:true })
    createdBy: User;

    @Prop({ type: String, required: true, unique: true })
    nombre: string;

    @Prop({ type: Array})
    clientes: Cliente[];

    @Prop({ type: User})
    coTitulares: User[];

    @Prop({ type: Number ,default: 0})
    montoTotal: Number;

    @Prop({ type: Array})
    movimientos: Movimiento[]


}

export const CtaCorrienteSchema = SchemaFactory.createForClass(CtaCorriente);