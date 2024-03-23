document.getElementById("calcular").addEventListener("click", function() {
    let usuarios = [];
    let nombre = document.getElementById("nombre").value;
    usuarios.push(nombre);

    let altura = Number(document.getElementById("altura").value);
    let peso = Number(document.getElementById("peso").value);

    if (altura >= 0 && altura <= 2.5) {
        let imc = calcularImc(peso, altura);
        let mensaje;
        if (imc < 18.5) {
            mensaje = "Bajo peso";
        } else if (imc >= 18.5 && imc <= 24.9) {
            mensaje = "Peso normal";
        } else if (imc >= 25 && imc < 29.9) {
            mensaje = "Sobrepeso";
        } else {
            mensaje = "Obesidad";
        }

        let resultado = "Hola " + usuarios[usuarios.length - 1] + "\n" + "Tu IMC es " + imc + " lo que indica que tu peso esta en la categoria " + mensaje + " para adultos de tu estatura" ;
        console.log(resultado);
        document.querySelector("h2").innerText = resultado;
    } else {
        document.querySelector("h2").innerText = "Error: La altura debe estar expresada en metros";
    }
});

function calcularImc(peso, altura) {
    return peso / (altura * altura);
}