import { Mongoose } from 'mongoose';
import { ProductSchema } from './schema/products.schema';

export const ProductsProviders = [
  {
    provide: 'PRODUCTS_MODEL',
    useFactory: (mongoose: Mongoose) =>
      mongoose.model('Products', ProductSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
