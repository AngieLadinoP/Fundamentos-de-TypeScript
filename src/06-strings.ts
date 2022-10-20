(() => {
  let productTitle: string = 'My amazing title';
  productTitle = 'My amazing title changed';
  console.log(productTitle);

  let productDescription = "I'm a car";
  let productPrice = 150;
  let isNew = true;

  const summary = `
  Title: ${productTitle}
  Description: ${productDescription}
  Price: ${productPrice}
  New: ${isNew}
  `;

  console.log(summary);
})();
