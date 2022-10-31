import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from 'src/models/users/schema/user.schema';

export type ProductsDocument = Products & Document;

@Schema()
export class Products {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  userId: string;

//   @Prop({ type: Types.ObjectId, ref: User.name })
//   user: User | Types.ObjectId;
 } 

export const ProductSchema = SchemaFactory.createForClass(Products);
