import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { JwtStrategy } from 'src/core/auth/strategy/JWT-strategy';
import { User } from '../users/schema/user.schema';
import { ProductUserDto } from './dto/products.dto';
import { UpdatePUserDto } from './dto/upProductUser.dto';
import { Products } from './schema/products.schema';

@Injectable()
export class ProductsService {
  JwtStrategy: JwtStrategy;

  constructor(
    @Inject('PRODUCTS_MODEL')
    private readonly productepostiroy: Model<Products>,
    @Inject('USER_MODEL') private readonly userepostiroy: Model<User>,
  ) {}

  createproduct(id: string, productUserDto: ProductUserDto) {
    return this.productepostiroy
      .create({ ...productUserDto, users: id })
      .then((products) => {
        console.log(products._id);

        return this.userepostiroy.findById(id).then((arr) => {
          console.log(arr.products);
          arr.products.push(products._id);
          return arr.save();
        });
      });
  } 

  getProduct(id: string) {
    return this.userepostiroy.findById(id).populate('user');
  }

  update(id: string, updatePUserDto: UpdatePUserDto) {
    return this.productepostiroy
      .findByIdAndUpdate(id, { $set: updatePUserDto }, { new: true })
      .then((response) => {
        return response;
      });
  }

  removeProduct(id: string, productId: string) {
    this.userepostiroy.findById(id).then((arr) => {
      arr.products.pull(productId);
      return arr.save().then(() => {
        return this.productepostiroy.findByIdAndDelete(productId);
      });
    });
    return 'Delete complet';
  }
}
