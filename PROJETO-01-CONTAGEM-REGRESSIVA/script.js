const diasEl = document.getElementById("dias");
const horasEl = document.getElementById("horas");
const minutosEl = document.getElementById("minutos");
const segundosEl = document.getElementById("segundos");

const DataCompleta = "1 Feb 2030";

function contador() {
    const DataCompletaForm = new Date(DataCompleta);
    const DataAtual = new Date();

    const SegundosTotais = (DataCompletaForm - DataAtual) / 1000;

    const dias = Math.floor(SegundosTotais / 3600 / 24);
    const horas = Math.floor(SegundosTotais / 3600) % 24;
    const minutos = Math.floor(SegundosTotais / 60) % 60;
    const segundos = Math.floor(SegundosTotais) % 60;

    diasEl.innerHTML = dias;
    horasEl.innerHTML = Formatador(horas);
    minutosEl.innerHTML = Formatador(minutos);
    segundosEl.innerHTML = Formatador(segundos);

}

function Formatador(time) {
    return time < 10 ? `0${time}` : time;
}

// chamada inicial

contador();

setInterval(contador, 1000)
