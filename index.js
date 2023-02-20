const cvtKeCelcius = require ('./temperature');

let fahrenheit = 99;
let celcius = cvtKeCelcius (fahrenheit);
concole.log('${fahrenheit} f = ${celcius} c.');

const {hitungBMI, kategoriBMI} = require('./bmi');

let berat = 115;
let tinggi = 1.0;

let bmi = hitungBMI(berat, tinggi);
let bmikategori = kategoriBMI(bmi);

console.log('BMI: ${bmi.toFixed(2)}');
console.log('kategori BMI: ${bmikategori}');