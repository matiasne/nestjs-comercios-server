import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes, Types, Document } from "mongoose";

export type RolDocument = Rol & Document;

@Schema({ timestamps: true, strict:true })
export class Rol{   

    @Prop({type:String,required:true})
    estado:string

    @Prop({type:String,required:true})
    rol:string

    @Prop({type:String})
    userEmail:string

    @Prop({type:String,required:true})
    userId:string

}

export const RolSchema = SchemaFactory.createForClass(Rol);

