const form3= document.querySelector("#form-media");
const resultado3 = document.querySelector("#resultado-media");
const btn3 = document.querySelector('#calcular-media')

btn3.addEventListener("click", (e) => {
  e.preventDefault();
  const valor1 = Number(document.querySelector("#ma").value);
  const valor2 = Number(document.querySelector("#mb").value);
  const valor3 = Number(document.querySelector("#mc").value);
  if (!valor1 || !valor2 || !valor3) {
    if (!document.querySelector("#aviso")) {
      const p = document.createElement("p");
      p.id = "aviso";
      p.textContent = "PREENCHA OS CAMPOS CORRETAMENTE";
      console.log(form3.appendChild(p));
      setTimeout(() => {
        p.classList.add("fade-out");
        setTimeout(() => {
          p.remove();
        }, 500);
      }, 3000);
    }
    return;
  }
  media(valor1, valor2, valor3);
});

function media(a, b, c) {
  resultado3.innerHTML = "";
  const media = (a + b + c) / 3
  const resposta = document.createElement("p");
  resposta.id = 'resposta'
  resposta.textContent = `MÉDIA ARITMÉTICA DE ${a} + ${b} + ${c} = ${media.toFixed(2)}`
  console.log(resultado3.appendChild(resposta));
}