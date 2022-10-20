(() => {
  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null;
  let myString: string | undefined = undefined;

  function hi(name: string | null) {
    let hello = 'Hi ';
    if (name) {
      hello += name;
    } else {
      hello += 'nobody';
    }
    console.log(hello);
  }

  hi('Maria');
  hi(null);

  function hi2(name: string | null) {
    let hello = 'Hi ';
    hello += name?.toLowerCase() || 'nobody';
    console.log(hello);
  }

  hi2('Maria');
  hi2(null);
})();
