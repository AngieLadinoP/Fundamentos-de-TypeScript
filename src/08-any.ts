() => {
  let myDynamicVar: any;
  myDynamicVar = 100;
  myDynamicVar = null;
  myDynamicVar = {};

  const rta = (myDynamicVar as string).toLowerCase();
  console.log(rta);

  const rta2 = (<string>myDynamicVar).toLowerCase();
  console.log(rta2);
};
