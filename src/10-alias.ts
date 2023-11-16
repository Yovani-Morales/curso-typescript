(() => {
  // Alias
  type UserId = number | string | boolean;
  let userId: UserId;

  function greeting(userId: UserId) {
    if (typeof userId == 'string') {
      console.log(`string: ${userId.toLowerCase()}`);
    } else if  (typeof userId == 'number') {
      console.log(`number: ${userId.toFixed(2)}`)
    } else {
      console.log('boolean: ', userId);
    }
  }

  greeting('PEPE');
  greeting(3.1416);
  greeting(true);


  // Literal types
  let option: 1 | 2 | 3;
  option = 2;


  // Alias + Literal types
  type Size = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Size;
  shirtSize = 'S';
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';
})();
