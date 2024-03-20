import './style.css';
import { Messaging } from './solid/ocp/services/messaging';
import { Persistency } from './solid/ocp/services/persistency';
import { Order } from './solid/ocp/entities/order';
import { Product } from './solid/ocp/entities/product';
import { ShoppingCard } from './solid/ocp/solid';
import { FiftyPercentDiscount, TenPercentDiscount } from './solid/ocp/entities/discount';

/* import { ShoppingCard } from './normalCode'; */ //without patterns

const tenPercentDiscount = new TenPercentDiscount();
const fiftyPercentDiscount = new FiftyPercentDiscount();

const shoppingCard = new ShoppingCard(tenPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCard, messaging, persistency);

shoppingCard.addItem({ name: 'shirt', price: 10 });
shoppingCard.addItem(new Product('cap', 80).getProduct());
shoppingCard.addItem(new Product('paint', 10).getProduct());

console.log(shoppingCard.items);
console.log(shoppingCard.total());
console.log(shoppingCard.totalWithDiscount());
console.log(order.orderStatus);
shoppingCard.items.forEach((item) => console.log(item));
order.checkout();
console.log(order.orderStatus);
