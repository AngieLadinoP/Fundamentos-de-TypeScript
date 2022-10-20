(() => {
  let isEnable = true;

  let isBoolean: boolean = true;
  console.log('isBoolean', isBoolean);
  isBoolean = false;
  console.log('isBoolean', isBoolean);

  const random = Math.random();
  console.log(random);
  isBoolean = random >= 0.5 ? false : true;
  console.log(isBoolean);
})();
