"use strict";
(() => {
    // Destructuring Objects en argumentos con tipado
    // const login = ({email, password}: {email: string, password: number}) => {
    //   console.log(email, password);
    // }
    const login = (data) => {
        const { email, password } = data;
        console.log(email, password);
    };
    // login('yovany@gmail.com', '12345');
    login({
        email: 'yovany@gmail.com',
        password: 12345
    });
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
    console.log(products);
})();
