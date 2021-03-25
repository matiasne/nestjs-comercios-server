import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true, strict:true })
export class User {


  @Prop({ type: String, required: true, unique: true })
  username:string;

  @Prop({ type: String})
  passwordHash:string;

  /*@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Owner' })
  owner: Owner;*/
}

export const UserSchema = SchemaFactory.createForClass(User);