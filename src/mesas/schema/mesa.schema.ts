import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type MesaDocument = Mesa & Document;

@Schema({ timestamps: true, strict:true })
export class Mesa {
    @Prop({ type: String, required: true, unique: true })
    nombre: string;
}

export const MesaSchema = SchemaFactory.createForClass(Mesa);