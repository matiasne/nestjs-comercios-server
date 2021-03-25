import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes, Types, Document } from "mongoose";

export type DireccionDocument = Direccion & Document;

@Schema({ timestamps: true, strict:true })
export class Direccion{

    @Prop({ type: String, required: true })
    pais: string;

    @Prop({ type: String, required: true })
    provincia: string;

    @Prop({ type: String, required: true })
    calleNombre: string;

    @Prop({ type: String, required: true })
    calleNumero: string;

    @Prop({ type: String })
    piso: string;

    @Prop({ type: String})
    puerta: string;

    @Prop({ type: String})
    latitud: string;

    @Prop({ type: String})
    longitud: string;
}

export const DireccionSchema = SchemaFactory.createForClass(Direccion);