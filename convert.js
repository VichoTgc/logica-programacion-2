function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}
const prompt = require('prompt-sync')();

function solicitarTemperatura(){
    let celsiusInput;
    let celsiusValue;

    //

    do{
        celsiusInput = prompt("Ingrese la temperatura en grados Celsius:");
        celsiusValue = parseFloat(celsiusInput);
        if(isNaN(celsiusValue)){
            console.log("Por favor, ingrese un valor numérico válido.");
        }

    }
    while(isNaN(celsiusValue));

    return celsiusValue;
    }
function convertirTemperatura(){
    const celsius = solicitarTemperatura();
    const fahrenheit = celsiusToFahrenheit(celsius);
    const kelvin = celsiusToKelvin(celsius);

    console.log(`Temperatura en Celsius: ${celsius}°C`);
    console.log(`Temperatura en Fahrenheit: ${fahrenheit}°F`);
    console.log(`Temperatura en Kelvin: ${kelvin}K`);
}

//Ejecutar
convertirTemperatura();