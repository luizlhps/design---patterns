import { Product } from './product';
const createSut = (name: string, price: number) => {
  return new Product(name, price);
};

describe('Product', () => {
  it('should have product name and price', () => {
    const name = 'shirt';
    const price = 10.99;
    const sut = createSut(name, price);
    expect(sut).toHaveProperty('name', name);
    expect(sut.price).toBeCloseTo(price);
  });
});
