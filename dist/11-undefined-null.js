"use strict";
(() => {
    // let myNumber: number = undefined;
    // let myString: string = null;
    let myNull = null;
    let myUndefined = undefined;
    let myNumber = null;
    myNumber = 12;
    function hi(name) {
        let hello = 'Hola ';
        if (name) {
            hello += name;
        }
        else {
            hello += 'unknow';
        }
        console.log(hello);
    }
    hi('Yovany');
    hi(null);
    // Optional chaining
    function hiV2(name) {
        let hello = 'Hola ';
        hello += (name === null || name === void 0 ? void 0 : name.toLowerCase()) || 'unknow';
        console.log(hello);
    }
    hiV2('Rubi');
    hiV2(null);
})();
