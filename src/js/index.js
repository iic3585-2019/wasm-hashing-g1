Module.onRuntimeInitialized = () => {
  console.log("LOADED");
  const int_sqrt = Module.cwrap('int_sqrt', 'number', ['number']);
  const hash = Module.cwrap('hash', 'number', ['string']);
  console.log(int_sqrt(12));
  console.log(int_sqrt(28));
  console.log(hash("WENO Y Q PAZA"));
};
