(() => {
  let prices = [1,2,3];
  // prices.push('hola');
  // prices.push(true);
  prices.push(4);
  console.log(prices);

  let products = [1,2,3,'z'];
  products.push('Balon');
  products.push(3);
  // products.push(true);
  console.log(products);

  const mixed: (string | number | boolean)[] = [];
  mixed.push('clothes');
  mixed.push(78);
  mixed.push(true);
  mixed.push('Hat');
  console.log(mixed);

  let numbers = [1,2,3];
  numbers.map(num => console.log(num*2));
})();
