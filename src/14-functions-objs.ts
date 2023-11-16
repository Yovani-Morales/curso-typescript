(() => {
  // Destructuring Objects en argumentos con tipado
  // const login = ({email, password}: {email: string, password: number}) => {
  //   console.log(email, password);
  // }

  type User = {email: string, password: string | number};

  const login = (data: User ) => {
    const {email, password} = data;
    console.log(email, password);
  }

  // login('yovany@gmail.com', '12345');
  login({
    email: 'yovany@gmail.com',
    password: 12345
  });

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const products: any[] = [];

  const addProduct = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }) => {
    products.push(data);
  }

  addProduct({
    title: 'P1',
    createdAt: new Date(),
    stock: 12,
    size: 'S'
  })

  addProduct({
    title: 'P2',
    createdAt: new Date(),
    stock: 24,
    size: 'L'
  })

  console.log(products);
})();
