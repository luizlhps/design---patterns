import { CartItem } from './interfaces/cart-items';

export class Product implements CartItem {
  constructor(public name: string, public price: number) {}

  getProduct(): CartItem {
    return { name: this.name, price: this.price };
  }
}
