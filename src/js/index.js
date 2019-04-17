Module.onRuntimeInitialized = () => {
  console.log("LOADED");
  const levA = document.getElementById("lev-a");
  const levB = document.getElementById("lev-b");
  const levSubmit = document.getElementById("lev-run");
  const levResult = document.getElementById("lev-result");

  levSubmit.onclick = () => {
    levResult.innerText = distance(levA.value, levB.value);
  };
  
  const int_sqrt = Module.cwrap('int_sqrt', 'number', ['number']);
  const hash = Module.cwrap('hash', 'number', ['string']);
  const distance = Module.cwrap('distance', 'number', ['string', 'string']);
  console.log(hash("WENO Y Q PAZA"));
};
