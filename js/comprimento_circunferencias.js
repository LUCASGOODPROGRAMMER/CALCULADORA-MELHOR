const form5= document.querySelector("#form-comprimento-circunferencia");
const resultado5 = document.querySelector("#resultado-comprimento-circunferencia");
const btn5 = document.querySelector('#calcular-comprimento-circunferencia')

btn5.addEventListener("click", (e) => {
  e.preventDefault();
  const valor1 = Number(document.querySelector("#ca").value);
  if (!valor1) {
    if (!document.querySelector("#aviso")) {
      const p = document.createElement("p");
      p.id = "aviso";
      p.textContent = "PREENCHA OS CAMPOS CORRETAMENTE";
      console.log(form5.appendChild(p));
      setTimeout(() => {
        p.classList.add("fade-out");
        setTimeout(() => {
          p.remove();
        }, 500);
      }, 3000);
    }
    return;
  }
  comprimentoCirculo(valor1);
});

function comprimentoCirculo(a) {
  resultado5.innerHTML = "";
  const comprimento = 2*Math.PI*a
  const resposta = document.createElement("p");
  resposta.id = 'resposta'
  resposta.textContent = `COMPRIMENTO DA CIRCUNFERÊNCIA = ${comprimento.toFixed(2)}`
  console.log(resultado5.appendChild(resposta));
}