(function() {
  let productPrice = 100;
  productPrice = 200;
  console.log('Product price: ', productPrice);

  let customerAge: number = 28;
  customerAge = customerAge + 1;
  console.log('Customer Age: ', customerAge);

  let productInStock: number;
  console.log('Product in stock: ', productInStock);
  if (productInStock > 10) {
    console.log('is greater');
  }

  let discount = parseInt('100');
  console.log('discount: ', discount);
  if (discount <= 200) {
    console.log('apply');
  } else {
    console.log('not apply');
  }

  let hex = 0xfff;
  console.log('hex: ', hex);
  let bin = 0b1010;
  console.log('bin: ', bin);
})();
