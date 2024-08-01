let tempValue = parseFloat(prompt("Enter the temperature value:"));
let unit = prompt("Enter the unit (C for Celsius, F for Fahrenheit):").toUpperCase();

let convertedTemp;
let convertedUnit;

if (unit === "C") {
    convertedTemp = (tempValue * 9/5) + 32;
    convertedUnit = "Fahrenheit";
} else if (unit === "F") {
    convertedTemp = (tempValue - 32) * 5/9;
    convertedUnit = "Celsius";
} else {
    alert("Invalid! Enter C for Celsius or F for Fahrenheit.");
}

if (convertedTemp !== undefined && convertedUnit !== undefined) {
    alert("Converted temperature is: " + convertedTemp.toFixed(2) + " " + convertedUnit);
}