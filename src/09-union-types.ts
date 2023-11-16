(() => {
  let userId: number | string;
  userId = 123;
  userId = 'FSHK';

  function greeting(par: number | string) {
    if (typeof par == 'string') {
      console.log(`string: ${par.toLowerCase()}`);
    } else {
      console.log(`number: ${par.toFixed(1)}`);
    }
  }
  greeting('MArcelo');
  greeting(12.12345);
})();
