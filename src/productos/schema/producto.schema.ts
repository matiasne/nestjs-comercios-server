
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { SchemaTypes, Types, Document } from "mongoose";
import { Categoria } from "src/categorias/schema/categoria.schema";
import { Cocina } from "src/cocinas/schema/cocina.schema";
import { Comercio } from "src/comercios/schema/comercio.schema";

export type ProductoDocument = Producto & Document;

@Schema({ timestamps: true})
export class Producto {

    @Prop({ type: String,  required: true})
    nombre:string;

    @Prop({ type: String})
    comercioId:string;

    @Prop({type:String})
    barCode:string

    @Prop([String])
    categoriasId:string[];

    @Prop({ type: String})
    cocinasId:string[];

    @Prop({type:String})
    descripcion:string

    @Prop({type:Boolean,default:false})
    destacado:boolean

    @Prop({type:Boolean,default:false})
    enCarrito:boolean

    @Prop({ type: String})
    grupoOpcionesId:string[];

    @Prop({type:Number,default:false})
    precio:Number

    @Prop({type:Number,default:false})
    valorPor:Number

    @Prop({type:String,default:false})
    unidad:string

    @Prop({type:Number,default:false})
    stock:Number
}

export const ProductoSchema = SchemaFactory.createForClass(Producto);
