(() => {
  let myNull = null;
  let myUndefined = undefined;
  let myNumber = null;
  let myString = undefined;
  function hi(name) {
    let hello = "Hi ";
    if (name) {
      hello += name;
    } else {
      hello += "nobody";
    }
    console.log(hello);
  }

  hi("Maria");
  hi(null);
  function hi2(name) {
    let hello = "Hi ";
    hello +=
      (name === null || name === void 0 ? void 0 : name.toLowerCase()) ||
      "nobody";
    console.log(hello);
  }
  hi2("Maria");
  hi2(null);
})();
