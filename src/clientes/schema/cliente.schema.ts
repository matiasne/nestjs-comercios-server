import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes, Types, Document } from "mongoose";
import { Direccion } from 'src/direcciones/schema/direccion.schema';

export type ClienteDocument = Cliente & Document;

@Schema({ timestamps: true, strict:true })
export class Cliente{

    @Prop({ type: String, required: true })
    nombre: string

    @Prop({ type: String})
    comercioId:string[];

    @Prop({ type: String})
    telefono: string
    
    @Prop({ type: String, required: true, unique: true })
    email: string

    @Prop({ type: String })
    estado: string

    @Prop({ type: Date})
    fechaNacimiento: Date

    @Prop({type: String })
    descripcion: string

    @Prop({ type: Direccion})
    direccion: Direccion

    @Prop({type: String, unique: true })
    dni: string

    

}

export const ClienteSchema = SchemaFactory.createForClass(Cliente);