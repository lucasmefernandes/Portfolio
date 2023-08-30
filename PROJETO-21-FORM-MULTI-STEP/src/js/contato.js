import { toggleAlert, createAlert } from './erro.js';
import { dddBrasil } from './ddd.js'

const telefoneValue = document.getElementById("telefone");
const dddInput = document.getElementById("ddd");

export function verificaNumero(ddd, numero, tipo) {
    const numeroLimpo = numero.replace(/\D/g, '');
    const dddLimpo = ddd.replace(/\D/g, '');

    try {
        if (!(/^\d+$/.test(numeroLimpo)) || !(/^\d+$/.test(dddLimpo))) {
            throw new Error("Por favor, verifique se o DDD está vazio ou existe letras nos campos!");
        }

        const dddNumero = parseInt(dddLimpo);
        const numLength = numeroLimpo.length;

        if (!dddBrasil.includes(dddNumero)) {
            throw new Error("DDD inválido!");
        }

        if (tipo === 'fixo') {
            if (numLength === 8) {
                const numeroFormatado = numeroLimpo.replace(/(\d{4})(\d{4})/, '$1-$2');
                telefoneValue.value = numeroFormatado;
            } else {
                clear();
                createAlert();
                toggleAlert(true, "Número de telefone fixo deve ter 8 dígitos!");
                return false;
            }
        } else if (tipo === 'celular') {
            if (numLength === 9) {
                const numeroFormatado = numeroLimpo.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, '($1) $2 $3-$4');
                telefoneValue.value = numeroFormatado;
            } else {
                clear();
                createAlert();
                toggleAlert(true, "Número de telefone celular deve ter 9 dígitos!");
                return false;
            }
        }

        return true;
    } catch (error) {
        clear();
        createAlert();
        toggleAlert(true, error.message);
        return false;
    }
}

function clear() {
    telefoneValue.value = "";
    dddInput.value = "";
}