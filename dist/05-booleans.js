"use strict";
(() => {
    let isEnable = true;
    // isEnable = 'As';
    isEnable = false;
    let isNew = false;
    console.log('is new: ', isNew);
    isNew = true;
    console.log('is new: ', isNew);
    const random = Math.random();
    console.log('random: ', random);
    isNew = random >= 0.5 ? true : false;
    console.log('is new: ', isNew);
    const myBoolean = true;
    let test = '';
    // test = false;
})();
