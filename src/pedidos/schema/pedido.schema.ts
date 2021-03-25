import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { SchemaTypes, Types, Document } from "mongoose";

export type PedidoDocument = Pedido & Document;

@Schema({ timestamps: true, strict:true })
export class Pedido {
    @Prop({ type: String, required: true })
    nombre: string;
}

export const PedidoSchema = SchemaFactory.createForClass(Pedido);