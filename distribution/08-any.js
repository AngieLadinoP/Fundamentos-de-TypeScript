() => {
    let myDynamicVar;
    myDynamicVar = 100;
    myDynamicVar = null;
    myDynamicVar = {};
    const rta = myDynamicVar.toLowerCase();
    console.log(rta);
    const rta2 = myDynamicVar.toLowerCase();
    console.log(rta2);
};
