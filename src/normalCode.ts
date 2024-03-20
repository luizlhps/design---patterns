type CartItem = { name: string; price: number };
type OrderStatus = 'open' | 'closed';

export class ShoppingCard {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  total(): number {
    return +this._items.reduce((total, next) => total + next.price, 0).toFixed(2);
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('seu carrinho esta vázio');
      return;
    }

    this._orderStatus = 'closed';
    this.sendMessage('seu pedido foi recebido');
    this.saveOrder();
    this.clear();
  }
  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(message: string): void {
    console.log(message);
  }

  saveOrder(): void {
    console.log('salvo com sucesso');
  }

  clear(): void {
    this._items.length = 0;
    console.log('carrinho limpo');
    this._orderStatus = 'open';
  }
}

const shoppingCard = new ShoppingCard();
shoppingCard.addItem({ name: 'shirt', price: 2.32 });
shoppingCard.addItem({ name: 'glove', price: 2.32 });
shoppingCard.addItem({ name: 'cap', price: 2.32 });

console.log(shoppingCard.items);
console.log(shoppingCard.total());
shoppingCard.clear();
