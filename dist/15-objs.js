"use strict";
(() => {
    const products = [];
    const addProduct = (data) => {
        products.push(data);
    };
    addProduct({
        title: 'P1',
        createdAt: new Date(),
        stock: 12,
        size: 'S'
    });
    addProduct({
        title: 'P2',
        createdAt: new Date(),
        stock: 24,
        size: 'L'
    });
    // products.push('Hola')
    console.log(products);
})();
