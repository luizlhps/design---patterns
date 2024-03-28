import { Discount, FiftyPercentDiscount, TenPercentDiscount } from './discount';
const createSut = (className: new () => Discount): Discount => {
  return new className();
};

describe('Discount', () => {
  it('should have fifty percent discount', () => {
    const sut = createSut(FiftyPercentDiscount);
    expect(sut.apply(100)).toBeCloseTo(50);
  });
  it('should have ten percent discount', () => {
    const sut = createSut(TenPercentDiscount);
    expect(sut.apply(100)).toBeCloseTo(90);
  });
});
