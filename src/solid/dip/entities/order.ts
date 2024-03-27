import { OrderStatus } from './interfaces/order-status';
import { CustomerOrder } from './interfaces/customer-protocol';
import { ShoppingCardProtocol } from './interfaces/shopping-cart-protocol';
import { MessagingProtocol } from '../services/interfaces/messaging';
import { PersistencyProtocol } from '../services/interfaces/persistency';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCardProtocol,
    private readonly messaging: MessagingProtocol,
    private readonly persistency: PersistencyProtocol,
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
