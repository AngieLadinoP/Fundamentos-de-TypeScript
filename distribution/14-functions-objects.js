(() => {
    const login = (data) => {
        console.log(data.email, data.password);
    };
    login({ email: 'tes@gmail.com', password: '1234' });
    const products = [];
    const addProduct = (data) => {
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
