import { Discount } from './entities/discount';
import { CartItem } from './entities/interfaces/cart-items';
import { ShoppingCard } from './solid';

const createCartItem = (name: string, price: number): CartItem => {
  class CartItemMock implements CartItem {
    constructor(public name: string, public price: number) {}
  }

  return new CartItemMock(name, price);
};

const createSutWithProducts = (DiscountMock: new () => Discount) => {
  const sut = new ShoppingCard(new DiscountMock());
  sut.addItem(createCartItem('shirt', 100));
  sut.addItem(createCartItem('hat', 50));
  return sut;
};

describe('ShoppingCard', () => {
  it('should be an empty cart when no product is added', () => {
    class DiscountMock extends Discount {}
    const sut = new ShoppingCard(new DiscountMock());
    expect(sut.isEmpty()).toBe(true);
  });

  it('should have 2 products items in cart', () => {
    class DiscountMock extends Discount {}
    const sut = createSutWithProducts(DiscountMock);
    expect(sut.items.length).toEqual(2);
  });

  it('should have clear cart', () => {
    class DiscountMock extends Discount {}
    const sut = createSutWithProducts(DiscountMock);
    expect(sut.items.length).toEqual(2);

    sut.clear();
    expect(sut.items.length).toEqual(0);
  });

  it('should have remove one item cart', () => {
    class DiscountMock extends Discount {}
    const sut = createSutWithProducts(DiscountMock);
    expect(sut.items.length).toEqual(2);

    sut.removeItem(1);
    expect(sut.items.length).toEqual(1);
  });

  it('should total and totalWithDiscount', () => {
    class DiscountMock extends Discount {
      apply(price: number): number {
        return price * 0.5;
      }
    }

    const sut = new ShoppingCard(new DiscountMock());
    sut.addItem(createCartItem('shirt', 100));
    sut.addItem(createCartItem('hat', 50));
    expect(sut.total()).toEqual(150);
    expect(sut.totalWithDiscount()).toEqual(75);
  });

  it('should call discount.apply(price) when totalWithDiscount is called', () => {
    class DiscountMock extends Discount {
      apply(price: number): number {
        return price * 0.5;
      }
    }
    const discountMock = new DiscountMock();

    const sut = new ShoppingCard(discountMock);
    const discountSpy = jest.spyOn(discountMock, 'apply');
    sut.totalWithDiscount();
    expect(discountSpy).toHaveBeenCalled();
  });
});
