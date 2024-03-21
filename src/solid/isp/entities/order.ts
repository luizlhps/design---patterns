import { OrderStatus } from './interfaces/order-status';
import { Messaging } from '../services/messaging';
import { Persistency } from '../services/persistency';
import { ShoppingCard } from '../solid';
import { CustomerOrder } from './interfaces/customer-protocol';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCard,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency,
    private readonly customer: CustomerOrder
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('seu carrinho esta vázio');
      return;
    }

    this._orderStatus = 'closed';
    this.messaging.sendMessage(
      `o seu pedido com total de ${this.cart.totalWithDiscount()} foi realizado com sucesso ${
        this.customer.getName() + ' ' + this.customer.getIDN()
      }`
    );
    this.persistency.saveOrder();
    this.cart.clear();
  }
}
