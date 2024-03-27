import { CartItem } from './cart-items';

export interface ShoppingCardProtocol {
  addItem(item: CartItem): void;

  removeItem(index: number): void;

  get items(): Readonly<CartItem[]>;

  total(): number;

  totalWithDiscount(): number;

  isEmpty(): boolean;
  clear(): void;
}
