"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_service_1 = require("./product.service");
(0, product_service_1.addProduct)({
    title: 'P1',
    createdAt: new Date(),
    stock: 12,
    size: 'S'
});
(0, product_service_1.addProduct)({
    title: 'P2',
    createdAt: new Date(),
    stock: 24,
    size: 'L'
});
console.log(product_service_1.products);
console.log((0, product_service_1.calcStock)());
