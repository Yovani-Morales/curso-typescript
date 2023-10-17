(() => {
  let productTitle = 'My amazing product';
  // productTitle = null;
  // productTitle = 123;
  productTitle = 'My amazing product changed';
  console.log('product title: ', productTitle);

  const productDescription: string = "I'm, hahaha. This is a description";
  console.log('product description: ', productDescription);

  let productPrice = 1000;
  let isNew: boolean = false;

  const summary = `
    title: ${productTitle}
    description: ${productDescription}
    price: ${productPrice}
    is new: ${isNew}
  `;

  console.log(summary);
})();
