var titulo = document.querySelector("h1");
console.log(titulo);
console.log(titulo.textContent);
titulo.textContent = ("Aparecida Nutricionista");

var pacientes = document.querySelectorAll(".paciente");
    for (var i = 0; 1  < pacientes.length; i++) {

    var pacientes = [i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = document.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc")

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
       paciente.classList.add("paciente-invalido");
    }

    if(altura <= 0 || altura >= 3.00 ){
        console.log("Altura inválida!");
        alturaEhValida = true;
        tdImc.textContent = "Altura Inválida";
        paciente.classList.add("paciente-invalido");
    }


    if (alturaEhValida && pesoEhValido){
        var imc = peso / (altura*altura) ;
        tdImc.textContent=imc.toFixed(2);
    }
}

function calculaImc (peso, altura){
    var imc = 0;
    var imc = peso / (altura*altura) ;
    return imc;
}