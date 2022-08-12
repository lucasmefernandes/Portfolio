function bmiCalculator(kg, alt) {

    var imc = kg / (alt * alt);

    imc = imc.toFixed(2);

    if (imc < 18.5) {
        var x = "Seu IMC é " + imc + ". Você está com MAGREZA, pois seu IMC está Abaixo de 18.5";
        return x
    } else if (imc >= 18.5 && imc <= 24.9) {
        var x = "Seu IMC é " + imc + ". Você está NORMAL, pois seu IMC está entre 18.5 e 24.9";
        return x
    } else if (imc >= 25 && imc <= 29.9) {
        var x = "Seu IMC é " + imc + ". Você está com SOBREPESO, pois seu IMC está entre 25 e 29.9";
        return x
    } else if (imc >= 30 && imc <= 34.9) {
        var x = "Seu IMC é " + imc + ". Você está com OBSIDADE, pois seu IMC está entre 30 e 34.9";
        return x
    } else if (imc >= 35) {
        var x = "Seu IMC é " + imc + ". Você está com OBSIDADE GRAVE, pois seu IMC está acima ou igual á 35";
        return x
    }
}

var bmi = bmiCalculator(125, 1.8);

console.log(bmi)