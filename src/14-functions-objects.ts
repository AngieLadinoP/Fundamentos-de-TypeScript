(() => {
  const login = (data: { email: string; password: string }) => {
    console.log(data.email, data.password);
  };

  login({ email: 'tes@gmail.com', password: '1234' });

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const products: any[] = [];

  const addProduct = (data: {
    title: string;
    createdAt: Date;
    stock?: number;
    size: Sizes;
  }) => {
    products.push(data);
  };

  addProduct({
    title: 'Product1',
    createdAt: new Date(),
    stock: 10,
    size: 'M',
  });

  addProduct({
    title: 'Product2',
    createdAt: new Date(),
    size: 'L',
  });
  console.log(products);
})();
