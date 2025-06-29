const form4= document.querySelector("#form-area-circulo");
const resultado4 = document.querySelector("#resultado-area-circulo");
const btn4 = document.querySelector('#calcular-area-circulo')

btn4.addEventListener("click", (e) => {
  e.preventDefault();
  const valor1 = Number(document.querySelector("#aa").value);
  if (!valor1) {
    if (!document.querySelector("#aviso")) {
      const p = document.createElement("p");
      p.id = "aviso";
      p.textContent = "PREENCHA OS CAMPOS CORRETAMENTE";
      console.log(form4.appendChild(p));
      setTimeout(() => {
        p.classList.add("fade-out");
        setTimeout(() => {
          p.remove();
        }, 500);
      }, 3000);
    }
    return;
  }
  areaCirculo(valor1);
});

function areaCirculo(a) {
  resultado4.innerHTML = "";
  const area = Math.PI*(Math.pow(a, 2))
  const resposta = document.createElement("p");
  resposta.id = 'resposta'
  resposta.textContent = `area do circulo = ${area.toFixed(2)}`
  console.log(resultado4.appendChild(resposta));
}