/* Veja como descobrir se um determinado ano é bissexto:
Um ano é bissexto se for divisível por 4;
exceto se esse ano também for divisível por 100;
a menos que esse ano também seja divisível por 400.

por exemplo. O ano 2000 é bissexto?:
2000 ÷ 4 = 500 (ano bissexto)
2000 ÷ 100 = 20 (não é bissexto)
2000 ÷ 400 = 5 (ano bissexto!)

Portanto, o ano 2000 é um ano bissexto.
Mas o ano 2100 não é um ano bissexto porque:
2100 ÷ 4 = 525 (ano bissexto)
2100 ÷ 100 = 21 (não é bissexto)
2100 ÷ 400 = 5,25 (não é bissexto) */


function isLeap(year){

    if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
        var resp = console.log("É um ano bissexto")
        return resp
    } else if (year % 4 === 0 && year % 100 !== 0) {
        var resp = console.log("É um ano bissexto")
        return resp
    } else {
        var resp = console.log("Não é um ano bissexto")
        return resp
    }
}

var x = console.log(isLeap(2040))