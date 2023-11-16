(() => {
  type Sizes = 'S' | 'M' | 'X' | 'XL';

  function createProducToJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ) {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const productOne = createProducToJson('P1', new Date(), 12, 'S');
  console.log(productOne);
  console.log(productOne.title);
  console.log(productOne.size);

  const createProducToJsonV2 = (
    title: string,
    createdAt: Date,
    stock: number,
    // Parametro opcional
    size?: Sizes
  ) => {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const productTwo = createProducToJsonV2('P2', new Date(), 12);
  console.log(productTwo);
  console.log(productTwo.title);
  console.log(productTwo.size);
})();
