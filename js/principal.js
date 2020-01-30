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

  var pesoEhValido = true;
  var alturaEhValida = true;

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

var botaoAdicionarPaciente = document.querySelector("#adicionar-paciente");
botaoAdicionarPaciente.addEventListener("click", function(event) {
  event.preventDefault();

  var form = document.querySelector("#form-adiciona-paciente");
  var paciente = obterPacienteDoFormulario(form);
  var pacienteTr = montaTr(paciente);
  var tabela = document.querySelector("#tabela-pacientes");

  tabela.appendChild(pacienteTr);
  form.reset();

});

function montaTd(dado, classe) {
  var td = document.createElement("td");
  td.classList.add(classe);
  td.textContent = dado;

  return td;
}

function montaTr(paciente) {
  
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");
  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}