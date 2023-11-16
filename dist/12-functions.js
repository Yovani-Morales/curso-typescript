"use strict";
(() => {
    function createProducToJson(title, createdAt, stock, size) {
        return {
            title,
            createdAt,
            stock,
            size
        };
    }
    const productOne = createProducToJson('P1', new Date(), 12, 'S');
    console.log(productOne);
    console.log(productOne.title);
    console.log(productOne.size);
    const createProducToJsonV2 = (title, createdAt, stock, 
    // Parametro opcional
    size) => {
        return {
            title,
            createdAt,
            stock,
            size
        };
    };
    const productTwo = createProducToJsonV2('P2', new Date(), 12);
    console.log(productTwo);
    console.log(productTwo.title);
    console.log(productTwo.size);
})();
