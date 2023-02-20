function hitungBMI(berat, tinggi) {
    return berat / (tinggi * tinggi);
}
function kategoriBMI(bmi){
    if (bmi <18.5){
        return "Dibawah Normal";
    } else if (bmi >= 18.5 && bmi< 25){
        return "normal";
    } else if (bmi >= 25 && bmi < 30){
        return "Diatas Normal"
    } else {
        return "Obesitas"
    }
}

module.exports = {
    hitungBMI,
    kategoriBMI
};

