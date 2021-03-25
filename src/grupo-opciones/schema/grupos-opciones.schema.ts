import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type GrupoOpcionesDocument = GrupoOpciones & Document;

@Schema({ timestamps: true, strict:true })
export class GrupoOpciones {
    @Prop({ type: String, required: true })
    nombre: string;
}

export const GrupoOpcionesSchema = SchemaFactory.createForClass(GrupoOpciones); 