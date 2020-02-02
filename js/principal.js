var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];
  
  var tdPeso = paciente.querySelector(".info-peso");
  var tdAltura = paciente.querySelector(".info-altura");
  var tdImc = paciente.querySelector(".info-imc");

  var peso = tdPeso.textContent;
  var altura = tdAltura.textContent;

  var pesoEhValido = validaAltura(altura);
  var alturaEhValida = validaPeso(peso);

  if (peso <= 0 || peso >= 1000) {
    pesoEhValido = false;
    tdPeso.textContent = "Peso inválido!"
  }
  if (altura <= 0 || altura >= 3.00) {
    alturaEhValida = false;
    tdAltura.textContent = "Altura é inválida!"
  }

  if (pesoEhValido && alturaEhValida) {
    tdImc.textContent = calculaImc(peso, altura);
  } else {
    paciente.classList.add("paciente-invalido");
  }
}

