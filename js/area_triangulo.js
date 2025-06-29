const form6= document.querySelector("#form-area-triangulo");
const resultado6 = document.querySelector("#resultado-area-triangulo");
const btn6 = document.querySelector('#calcular-area-triangulo')

btn6.addEventListener("click", (e) => {
  e.preventDefault();
  const valor1 = Number(document.querySelector("#ta").value);
  const valor2 = Number(document.querySelector("#tb").value);
  if (!valor1 || !valor2) {
    if (!document.querySelector("#aviso")) {
      const p = document.createElement("p");
      p.id = "aviso";
      p.textContent = "PREENCHA OS CAMPOS CORRETAMENTE";
      console.log(form6.appendChild(p));
      setTimeout(() => {
        p.classList.add("fade-out");
        setTimeout(() => {
          p.remove();
        }, 500);
      }, 3000);
    }
    return;
  }
  areaTriangulo(valor1, valor2);
});

function areaTriangulo(a, b) {
  resultado6.innerHTML = "";
  const area = b * a /2
  const resposta = document.createElement("p");
  resposta.id = 'resposta'
  resposta.textContent = `ÁREA DO TRIÂNGULO = ${area.toFixed(2)}`
  console.log(resultado6.appendChild(resposta));
}