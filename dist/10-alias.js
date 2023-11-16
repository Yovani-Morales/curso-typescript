"use strict";
(() => {
    let userId;
    function greeting(userId) {
        if (typeof userId == 'string') {
            console.log(`string: ${userId.toLowerCase()}`);
        }
        else if (typeof userId == 'number') {
            console.log(`number: ${userId.toFixed(2)}`);
        }
        else {
            console.log('boolean: ', userId);
        }
    }
    greeting('PEPE');
    greeting(3.1416);
    greeting(true);
    // Literal types
    let option;
    option = 2;
    let shirtSize;
    shirtSize = 'S';
    shirtSize = 'M';
    shirtSize = 'L';
    shirtSize = 'XL';
})();
