(() => {
  let myArray = [120, 25, 50, 18, 'abc', true];

  let mixed: (number | string | boolean)[] = [];
  mixed.push(123);
  mixed.push('abc');
  mixed.push(true);
  mixed.push('xyz');
  console.log(mixed);

  let mixed2: (string | number | object)[] = [];
  mixed2.push({ name: 'test', price: 123 });
  mixed2.push({ name: 'test', price: 123 });
  console.log(mixed2);

  let prices = [120, 25, 50, 18];
  prices.map((item) => item * 2);

  let references = ['A', 'B', 'C'];
  references.map((item) => item * 2);
})();
