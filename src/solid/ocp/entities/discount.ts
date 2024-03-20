export abstract class Discount {
  protected discount = 0;
  apply(price: number): number {
    return price - price * this.discount;
  }
}

export class TenPercentDiscount extends Discount {
  protected readonly discount = 0.1;
}
export class FiftyPercentDiscount extends Discount {
  protected readonly discount = 0.5;
}
