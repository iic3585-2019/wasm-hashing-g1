Module.onRuntimeInitialized = () => {
  console.log("LOADED");
  const int_sqrt = Module.cwrap('int_sqrt', 'number', ['number']);
  console.log(int_sqrt(12));
  console.log(int_sqrt(28));
};
