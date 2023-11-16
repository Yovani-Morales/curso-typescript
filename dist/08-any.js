"use strict";
(() => {
    let myDynamicVar;
    myDynamicVar = 123;
    myDynamicVar = true;
    // Cast in TypeScript
    myDynamicVar = 'Hola';
    const rta = myDynamicVar;
    console.log(rta.toLowerCase());
    myDynamicVar = 123;
    const rta2 = myDynamicVar.toFixed();
    console.log(rta2);
})();
