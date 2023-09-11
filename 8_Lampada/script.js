var lamp = window.document.getElementById("lampada");

function estaQuebrada() {
  return lamp.src.indexOf("quebrada") > -1;
}

function Ligar() {
  if (!estaQuebrada()) {
    lamp.src = "./images/ligada.svg";
  }
}

function Desligar() {
  if (!estaQuebrada()) {
    lamp.src = "./images/desligada.svg";
  }
}

lamp.addEventListener("click", Quebrar);

function Quebrar() {
  lamp.src = "./images/quebrada.svg";
}