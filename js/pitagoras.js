const form2 = document.querySelector("#form-pitagoras");
const resultado2 = document.querySelector("#resultado-pitagoras");
const btn2 = document.querySelector('#calcular-pitagoras')

btn2.addEventListener("click", (e) => {
  e.preventDefault();
  const valor1 = Number(document.querySelector("#pa").value);
  const valor2 = Number(document.querySelector("#pb").value);
  if (!valor1 || !valor2) {
    if (!document.querySelector("#aviso")) {
      const p = document.createElement("p");
      p.id = "aviso";
      p.textContent = "PREENCHA OS CAMPOS CORRETAMENTE";
      console.log(form2.appendChild(p));
      setTimeout(() => {
        p.classList.add("fade-out");
        setTimeout(() => {
          p.remove();
        }, 500);
      }, 3000);
    }
    return;
  }
  pitagoras(valor1, valor2);
});

function pitagoras(a, b) {
  resultado2.innerHTML = "";
  const calculo = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
  const valor = document.createElement("p");
  valor.id = 'resposta'
  valor.textContent = `a hipotenusa mede ${calculo.toFixed(2)} unidades`
  console.log(resultado2.appendChild(valor));
}


