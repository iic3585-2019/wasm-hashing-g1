Module.onRuntimeInitialized = () => {

  const int_sqrt = Module.cwrap('int_sqrt', 'number', ['number']);
  const hash = Module.cwrap('hash', 'number', ['string']);
  const mult = Module.cwrap('mult', 'number', ['number', 'number']);
  const distance = Module.cwrap('distance', 'number', ['string', 'string']);

  const hashA = document.getElementById("hash");
  const hashSubmit = document.getElementById("hash-run");
  const hashResult = document.getElementById("hash-result");

  hashSubmit.onclick = () => {
    hashResult.innerText = hash(hashA.value);
  };

  const karA = document.getElementById("kar-a");
  const karB = document.getElementById("kar-b");
  const karSubmit = document.getElementById("kar-run");
  const karResult = document.getElementById("kar-result");

  karSubmit.onclick = () => {
    karResult.innerText = mult(+karA.value, +karB.value);
  };


  const levA = document.getElementById("lev-a");
  const levB = document.getElementById("lev-b");
  const levSubmit = document.getElementById("lev-run");
  const levResult = document.getElementById("lev-result");

  levSubmit.onclick = () => {
    levResult.innerText = distance(levA.value, levB.value);
  };
};
