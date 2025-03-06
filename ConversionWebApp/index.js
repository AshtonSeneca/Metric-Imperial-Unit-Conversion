/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const valueToConvert = document.getElementById("input-num");
const meterEl = document.getElementById("output-length");
const volumeEl = document.getElementById("output-volume");
const massEl = document.getElementById("output-mass");



function convert(){
    
    if (valueToConvert.value != "") {
        let value = valueToConvert.value;

        meterEl.innerHTML = `${value} meters = ${(value * 3.28084).toFixed(3)} feet | ${value} feet = ${(value / 3.28084).toFixed(3)} meters`;
        volumeEl.innerHTML = `${value} liters = ${(value * 0.264172).toFixed(3)} gallons | ${value} gallons = ${(value / 0.264172).toFixed(3)} liters`;
        massEl.innerHTML = `${value} kilograms = ${(value * 2.20462).toFixed(3)} pounds | ${value} pounds = ${(value / 2.20462).toFixed(3)} kilograms`;
    } else {
        meterEl.innerHTML = "Please enter a value";
        volumeEl.innerHTML = "Please enter a value";
        massEl.innerHTML = "Please enter a value";
    }

}
