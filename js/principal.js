var titulo = document.querySelector("h1");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.lenght; i++)
{
	var paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var tdImc = paciente.querySelector(".info-imc");

	var pesoIsValido = true;
	var alturaIsValida = true;

	if(peso <= 0 || peso >= 1000)
	{
	console.log("Peso Inválido !");
	pesoIsValido = false;
	tdImc.textContent = "Peso Inválido !";
	}

	if(altura <= 0 || altura >= 3.00)
	{
	console.log("Altura Inválida !")
	alturaIsValida = false;
	tdImc.textContent = "Altura Inválida !";
	}

	if(alturaIsValida && pesoIsValido)
	{
	var imc = peso / (altura * altura); // imc = 100 / (2.0 * 2.0) = 100 / 4 => 25
	tdImc.textContent = imc;
	}
}