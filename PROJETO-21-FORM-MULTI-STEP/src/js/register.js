import { toggleAlert, createAlert } from './erro.js';

function verificaCamposDoFormulario(campo) {
    const nomeInput = document.getElementById("nome");
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const senhaInput = document.getElementById("senha");
    const confirmaSenhaInput = document.getElementById("confirma-senha");

    const nome = nomeInput.value.trim();
    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const senha = senhaInput.value;
    const confirmaSenha = confirmaSenhaInput.value;


    try {
        if (campo === "nome" && (!nome || nome.length < 3)) {
            nomeInput.value = ''
            throw new Error("O campo 'Nome' deve conter pelo menos 3 caracteres.");
        }

        if (campo === "username" && (!/^[a-zA-Z0-9_-]+$/.test(username))) {
            usernameInput.value = ''
            throw new Error("O campo 'Username' não pode conter espaços e deve usar apenas '_', '-' ou caracteres alfanuméricos.");
        }

        if (campo === "email" && (!email || !isValidEmail(email))) {
            emailInput.value = ''
            throw new Error("Por favor, insira um endereço de email válido.");
        }

        if (campo === "senha" && (senha.length < 8 || !/[A-Z]/.test(senha) || !/\d/.test(senha) || !/[^a-zA-Z0-9]/.test(senha))) {
            senhaInput.value = ''
            throw new Error("A senha deve ter pelo menos 8 caracteres, incluir pelo menos 1 letra maiúscula, 1 número e 1 caractere especial.");
        }

        if (campo === "confirma-senha" && (senha !== confirmaSenha)) {
            confirmaSenhaInput.value = ''
            throw new Error("A senha e a confirmação de senha não coincidem. Por favor, verifique.");
        }

        if (nome, username, email, senha, confirmaSenha) {
            return true;
        } else {
            return false
        }

    } catch (error) {
        createAlert();
        toggleAlert(true, error.message);
        return false;
    }
}

function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
}

export { verificaCamposDoFormulario };