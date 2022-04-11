function lanzarDado(dado1) {
  let resultado = Math.random() * 6;
  resultado = Math.ceil(resultado);
  dado1.textContent = resultado;
}

const btn1 = document.getElementById("button1");
const btn2 = document.getElementById("button2");
const btn3 = document.getElementById("button3");

const dado1 = document.getElementById("pantalla1");
const dado2 = document.getElementById("pantalla2");
const dado3 = document.getElementById("pantalla3");

btn1.addEventListener("click", () => lanzarDado(dado1));
btn2.addEventListener("click", () => lanzarDado(dado2));
btn3.addEventListener("click", () => lanzarDado(dado3));
