export abstract class Discount {
  abstract apply(price: number): number;
}

export class TenPercentDiscount extends Discount {
  private readonly discount = 0.1;
  apply(price: number): number {
    return price - price * this.discount;
  }
}
export class FiftyPercentDiscount extends Discount {
  private readonly discount = 0.5;
  apply(price: number): number {
    return price - price * this.discount;
  }
}
