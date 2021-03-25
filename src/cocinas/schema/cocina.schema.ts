import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes, Types, Document } from "mongoose";
export type CocinaDocument = Cocina & Document;

@Schema({ timestamps: true, strict:true })
export class Cocina {
    @Prop({ type: String, required: true, unique: true })
    nombre: string;
}

export const CocinaSchema = SchemaFactory.createForClass(Cocina);