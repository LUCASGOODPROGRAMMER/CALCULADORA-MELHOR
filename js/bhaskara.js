const form1 = document.querySelector("#form-bhaskara");
const resultado1 = document.querySelector("#resultado-bhaskara");

document.querySelector("#calcular-bhaskara").addEventListener("click", (e) => {
  e.preventDefault();
  const valor1 = Number(document.querySelector("#ba").value);
  const valor2 = Number(document.querySelector("#bb").value);
  const valor3 = Number(document.querySelector("#bc").value);
  if (!valor1 || !valor2 || !valor3) {
    if (!document.querySelector("#aviso")) {
      const p = document.createElement("p");
      p.id = "aviso";
      p.textContent = "PREENCHA OS CAMPOS CORRETAMENTE";
      console.log(form1.appendChild(p));
      setTimeout(() => {
        p.classList.add("fade-out");
        setTimeout(() => {
          p.remove();
        }, 500);
      }, 3000);
    }
    return;
  }
  baskara(valor1, valor2, valor3);
});

function baskara(a, b, c) {
  resultado1.innerHTML = "";
  const calcBhaskara1 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
  const calcBhaskara2 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
  if (calcBhaskara1 < 0 || calcBhaskara2 < 0) {
    const erro = document.createElement("p");
    erro.textContent = `NÃO EXISTE RAÍZES REAIS`;
    console.log(resultado1.appendChild(erro));
    return;
  }
  const x1 = document.createElement("p");
  const x2 = document.createElement("p");
  x1.id = 'resposta'
  x2.id = 'resposta'
  x1.textContent = `valor de x1 = ${calcBhaskara1.toFixed(2)}`;
  x2.textContent = `valor de x2 = ${calcBhaskara2.toFixed(2)}`;
  console.log(resultado1.appendChild(x1));
  console.log(resultado1.appendChild(x2));
}
