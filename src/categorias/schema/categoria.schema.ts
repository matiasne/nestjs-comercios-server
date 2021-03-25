import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CategoriaDocument = Categoria & Document;

@Schema()
export class Categoria {
  @Prop({ type: String, required: true, unique: true  })
  nombre: string;

  /*@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Owner' })
  owner: Owner;*/
}

export const CategoriaSchema = SchemaFactory.createForClass(Categoria);