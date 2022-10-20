(() => {
  function greeting(myText: string | number) {
    if (typeof myText === 'string') {
      console.log(`String ${myText.toLowerCase()}`);
    } else {
      console.log(`Number ${myText.toFixed(1)}`);
    }
  }

  greeting('Hello');
  greeting(12.34);
})();
