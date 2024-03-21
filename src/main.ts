import { IndividualCustomer } from './solid/isp/entities/customer';
import { FiftyPercentDiscount, TenPercentDiscount } from './solid/isp/entities/discount';
import { Order } from './solid/isp/entities/order';
import { Product } from './solid/isp/entities/product';
import { Messaging } from './solid/isp/services/messaging';
import { Persistency } from './solid/isp/services/persistency';
import { ShoppingCard } from './solid/isp/solid';
import './style.css';

/* import { ShoppingCard } from './normalCode'; */ //without patterns

const tenPercentDiscount = new TenPercentDiscount();
const fiftyPercentDiscount = new FiftyPercentDiscount();

const shoppingCard = new ShoppingCard(tenPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const customer = new IndividualCustomer('luiz', 'henrique', '000.000.000/01');

const order = new Order(shoppingCard, messaging, persistency, customer);

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
