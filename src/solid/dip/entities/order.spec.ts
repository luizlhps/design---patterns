import { MessagingProtocol } from '../services/interfaces/messaging';
import { PersistencyProtocol } from '../services/interfaces/persistency';
import { CustomerOrder } from './interfaces/customer-protocol';
import { ShoppingCardProtocol } from './interfaces/shopping-cart-protocol';
import { Order } from './order';

class ShoppingCartMock implements ShoppingCardProtocol {
  addItem(): void {}
  clear(): void {}
  isEmpty(): boolean {
    return false;
  }

  removeItem(): void {}
  total(): number {
    return 1;
  }
  totalWithDiscount(): number {
    return 100;
  }
}

class MessagingMock implements MessagingProtocol {
  sendMessage(): void {}
}

class PersistencyMock implements PersistencyProtocol {
  saveOrder(): void {}
}
class CustomerOrderMock implements CustomerOrder {
  getIDN(): string {
    return '123';
  }
  getName(): string {
    return 'Customer';
  }
}

const createSut = () => {
  const shoppingCartMock = new ShoppingCartMock();
  const messagingMock = new MessagingMock();
  const persistencyMock = new PersistencyMock();
  const customerOrderMock = new CustomerOrderMock();
  const order = new Order(shoppingCartMock, messagingMock, persistencyMock, customerOrderMock);

  return { sut: order, shoppingCartMock, messagingMock, persistencyMock, customerOrderMock };
};

describe('Order', () => {
  it('should set the order status to closed', () => {
    const { sut } = createSut();

    sut.checkout();

    expect(sut.orderStatus).toEqual('closed');
  });

  it('should log an message if the cart is empty', () => {
    const { sut, shoppingCartMock } = createSut();
    const shoppingCartMockSpy = jest.spyOn(shoppingCartMock, 'isEmpty').mockReturnValueOnce(true);
    const consoleSpy = jest.spyOn(console, 'log');

    sut.checkout();

    expect(shoppingCartMockSpy).toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalledWith('seu carrinho esta vázio');
  });

  it('should order status open if the cart is empty', () => {
    const { sut, shoppingCartMock } = createSut();
    const shoppingCartMockSpy = jest.spyOn(shoppingCartMock, 'isEmpty').mockReturnValueOnce(true);

    sut.checkout();

    expect(shoppingCartMockSpy).toHaveBeenCalled();
    expect(sut.orderStatus).toBe('open');
  });

  it('should send email message to customer', () => {
    const { sut, messagingMock } = createSut();
    const messagingMockSpy = jest.spyOn(messagingMock, 'sendMessage');

    sut.checkout();

    expect(messagingMockSpy).toHaveBeenCalled();
  });

  it('should save order', () => {
    const { sut, persistencyMock } = createSut();
    const persistencyMockSpy = jest.spyOn(persistencyMock, 'saveOrder');

    sut.checkout();

    expect(persistencyMockSpy).toHaveBeenCalled();
  });

  it('should call function the clear cart', () => {
    const { sut, shoppingCartMock } = createSut();
    const shoppingCartMockSpy = jest.spyOn(shoppingCartMock, 'clear');

    sut.checkout();

    expect(shoppingCartMockSpy).toHaveBeenCalled();
  });
});
