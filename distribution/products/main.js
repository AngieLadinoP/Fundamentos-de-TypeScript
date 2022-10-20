import { addProduct, products } from "../../src/products/product.service";
addProduct({
  title: "Product1",
  createdAt: new Date(),
  stock: 10,
  size: "M",
});
addProduct({
  title: "Product2",
  createdAt: new Date(),
  stock: 4,
  size: "L",
});
console.log(products);
