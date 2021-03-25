import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { SchemaTypes, Types, Document } from "mongoose";

export type MovimientoDocument = Movimiento & Document;

@Schema({ timestamps: true, strict:true })
export class Movimiento {
    @Prop({ type: String, required: true })
    nombre: string;
}

export const MovimientoSchema = SchemaFactory.createForClass(Movimiento);