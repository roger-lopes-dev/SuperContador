function counter() {
  let start = document.querySelector("#start");
  let finish = document.querySelector("#finish");
  let step = document.querySelector("#step");
  let res = document.querySelector("#res");

  if (start.value.length == 0 || finish.value.length == 0 || step.value.length == 0) {
    res.innerHTML = "Impossível contar!";
  } else {
    res.innerHTML = 'Contando: <br>';
    let i = Number(start.value);
    let f = Number(finish.value);
    let p = Number(step.value);
    if (p <= 0) {
      alert('Passo inválido! Considerando PASSO 1');
      p = 1;
    }
    if (i < f) {
      // Contagem crescente
      for (var c = i; c <= f; c += p) {
        res.innerHTML += `${c} \u{1F449} `;
      }
    } else {
      //Contagem regressiva
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += `${c} \u{1F449}`;
      }
    }
    res.innerHTML += `\u{1F3C1}`;
  }
}
