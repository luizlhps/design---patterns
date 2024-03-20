import { OrderStatus } from './interfaces/order-status';
import { Messaging } from '../services/messaging';
import { Persistency } from '../services/persistency';
import { ShoppingCard } from '../solid';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCard,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('seu carrinho esta vázio');
      return;
    }

    this.messaging.sendMessage('seu pedido foi recebido');
    this.persistency.saveOrder();
    this.cart.clear();
  }
}
