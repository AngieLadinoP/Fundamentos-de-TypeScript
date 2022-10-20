import { addProduct, calcStock, products } from './product.service';

addProduct({
  title: 'Product1',
  createdAt: new Date(),
  stock: 10,
  size: 'M',
});

addProduct({
  title: 'Product2',
  createdAt: new Date(),
  stock: 4,
  size: 'L',
});
console.log(products);
const total = calcStock();
console.log(total);
