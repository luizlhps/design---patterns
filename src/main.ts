import './style.css';
import './normalCode';
import { ShoppingCard } from './solid/solid'; //solid
import { Order } from './solid/entities/order';
import { Messaging } from './solid/services/messaging';
import { Persistency } from './solid/services/persistency';
import { Product } from './solid/entities/product';
/* import { ShoppingCard } from './normalCode'; */ //without patterns

const shoppingCard = new ShoppingCard();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCard, messaging, persistency);

shoppingCard.addItem({ name: 'shirt', price: 2.32 });
shoppingCard.addItem(new Product('cap', 2.32).getProduct());
shoppingCard.addItem(new Product('paint', 2.32).getProduct());

console.log(shoppingCard.items);
console.log(shoppingCard.total());
console.log(order.orderStatus);
shoppingCard.items.forEach((item) => console.log(item));
order.checkout();
console.log(order.orderStatus);
