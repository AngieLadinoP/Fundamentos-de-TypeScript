// Immediately Invoked Function Expression
(() => {
  // Work in an inferred manner
  let productPrice = 3;
  productPrice = 12;
  console.log('Product price', productPrice);

  // Work explicitly
  let customerAge: number = 28;
  customerAge = customerAge + 1;
  console.log('Customer age', customerAge);

  let productStock: number;

  console.log('productInStock', productStock);

  let discount = parseInt('abc');
  console.log('discount', discount);

  let hex = 0xe71224;
  console.log('hex', hex);

  let bin = 0b1010;
  console.log('bin', bin);
})();
