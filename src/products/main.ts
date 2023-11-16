import { addProduct, calcStock, products  } from "./product.service";

addProduct({
  title: 'P1',
  createdAt: new Date(),
  stock: 12,
  size: 'S'
})

addProduct({
  title: 'P2',
  createdAt: new Date(),
  stock: 24,
  size: 'L'
})

console.log(products);
console.log(calcStock());
