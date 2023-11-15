
let consultarImc;
let nombre = prompt('Ingrese su nombre');
const NO = "no"
const SI = "si"

do{
    let peso = prompt('Ingrese su peso en kilogramos');
    let altura = prompt('Ingrese su altura en metros');
    let imc = peso / (altura * altura);

    alert (`${nombre} su IMC es: ${imc}`);

    if (imc < 18.5) {
        alert('Su peso es bajo');
    }else if (imc >= 18.5 && imc <25) {
        alert('su peso es saludable');

    }else if (imc >= 25) {
        alert('Usted tiene sobrepeso');
    }else {
        alert('Tiene obesidad');
    }

    consultarImc = prompt('Desea calcular el imc nuevamente si/no').toLocaleLowerCase();

} while (consultarImc === SI);

alert(`Gracias ${nombre} por usar el calculador de imc.`);



