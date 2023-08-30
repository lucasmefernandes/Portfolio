import { verificaCEP } from './cep.js';
import { toggleAlert, createAlert } from './erro.js';

const cnpj = document.getElementById("cnpj")
const nomeFantasia = document.getElementById("nome-fantasia")
const razaoSocial = document.getElementById("razao-social")


export function verificaCNPJ(cnpj) {
    const cnpjLimpo = cnpj.replace(/\D/g, '');
    const cnpjFormatado = cnpjLimpo.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    return searchCNPJ(cnpjLimpo, cnpjFormatado)
}

async function searchCNPJ(cnpjInput, cnpjFormatado) {
    try {
        let queryCNPJ = await fetch(`https://publica.cnpj.ws/cnpj/${cnpjInput}`)
        let queryCNPJConverted = await queryCNPJ.json()

        if (queryCNPJConverted.erro) {
            throw Error("CNPJ NÃO EXISTE!")
        }

        cnpj.value = cnpjFormatado;
        nomeFantasia.value = queryCNPJConverted.razao_social;
        nomeFantasia.readOnly = true;
        razaoSocial.value = queryCNPJConverted.estabelecimento.nome_fantasia;
        razaoSocial.readOnly = true;

        verificaCEP(queryCNPJConverted.estabelecimento.cep, false)
        return true;
    } catch (erro) {
        clear()
        createAlert()
        toggleAlert(true, "CNPJ inválido. Tente novamente!");
        return false;
    }
}

function clear() {
    cnpj.value = ''
    nomeFantasia.value = ''
    razaoSocial.value = ''
}