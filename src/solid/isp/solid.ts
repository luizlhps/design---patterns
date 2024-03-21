import { Discount } from './entities/discount';
import { CartItem } from './entities/interfaces/cart-items';
/* Open / Closed
  Aberto para para extensão, mas fechado para modificação
*/

export class ShoppingCard {
  private readonly _items: CartItem[] = [];

  constructor(private readonly discount: Discount) {}

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  total(): number {
    return +this._items.reduce((total, next) => total + next.price, 0).toFixed(2);
  }

  totalWithDiscount(): number {
    return this.discount.apply(this.total());
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    this._items.length = 0;
    console.log('carrinho limpo');
  }
}
