(() => {
  // let myNumber: number = undefined;
  // let myString: string = null;

  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null;
  myNumber = 12;

  function hi(name: string | null) {
    let hello = 'Hola ';
    if (name) {
      hello += name;
    } else {
      hello += 'unknow';
    }
    console.log(hello);
  }

  hi('Yovany');
  hi(null);

  // Optional chaining
  function hiV2(name: string | null) {
    let hello = 'Hola ';
    hello += name?.toLowerCase() || 'unknow'
    console.log(hello);
  }

  hiV2('Rubi');
  hiV2(null);
})();
