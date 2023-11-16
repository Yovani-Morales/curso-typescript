(() => {
  let myDynamicVar: any;
  myDynamicVar = 123;
  myDynamicVar = true;

  // Cast in TypeScript
  myDynamicVar = 'Hola';
  const rta = (myDynamicVar as string);
  console.log(rta.toLowerCase());

  myDynamicVar = 123;
  const rta2 = (<number>myDynamicVar).toFixed();
  console.log(rta2);
})();
