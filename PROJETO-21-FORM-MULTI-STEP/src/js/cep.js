import { toggleAlert, createAlert } from './erro.js';

const cepInput = document.getElementById("cep");
const rua = document.getElementById("rua");
const estado = document.getElementById("estado");
const cidade = document.getElementById("cidade");
const bairro = document.getElementById("bairro");

export async function verificaCEP(cep, numero) {
    const cepLimpo = cep.replace(/\D/g, '');
    const cepFormatado = cepLimpo.replace(/(\d{5})(\d{3})/, '$1-$2');

    try {

        if (!(/^\d+$/.test(cepLimpo))) {
            clear();
            createAlert();
            toggleAlert(true, "Por favor, preencha o campo do CEP somente com números!");
            return false;
        }

        const consultaCEP = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
        const consultaCEPConvertida = await consultaCEP.json();
        if (consultaCEPConvertida.erro) {
            clear();
            createAlert();
            toggleAlert(true, "CEP não encontrado!");
            return false;
        }

        cepInput.value = cepFormatado;
        rua.value = consultaCEPConvertida.logradouro;
        rua.readOnly = true;
        bairro.value = consultaCEPConvertida.bairro;
        bairro.readOnly = true;
        cidade.value = consultaCEPConvertida.localidade;
        cidade.readOnly = true;
        estado.value = consultaCEPConvertida.uf;
        estado.readOnly = true;

        if (!numero || numero.trim() === '') {
            return false;
        } else {
            return true
        }

    } catch (error) {
        clear();
        createAlert();
        toggleAlert(true, error.message);
        return false;
    }
}

function clear() {
    cepInput.value = '';
    rua.value = '';
    estado.value = '';
    cidade.value = '';
    bairro.value = '';
}