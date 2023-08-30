import { verificaCEP } from './cep.js';
import { verificaCNPJ } from './cnpj.js';
import { verificaNumero } from './contato.js'
import { verificaCamposDoFormulario } from './register.js'
import { toggleAlert, createAlert } from './erro.js';
import { enviarDados } from './enviarDados.js';

const stepValidations = [false, false, false, false];

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("multi-step-form");
    const steps = form.querySelectorAll(".step");
    const nextButtons = form.querySelectorAll(".next-step");
    const prevButtons = form.querySelectorAll(".prev-step");
    let currentStep = 0;

    function showStep(stepNumber) {
        steps.forEach((step) => {
            step.style.display = "none";
        });

        steps[stepNumber].style.display = "block";
    }

    nextButtons.forEach((button) => {
        button.addEventListener("click", function (e) {
            e.preventDefault();
            console.log(stepValidations[currentStep])
            if (stepValidations[currentStep]) {
                currentStep++;
                showStep(currentStep);
                console.log(stepValidations)
                let itensLineId = '#lineIcon' + currentStep
                let itensTextId = '#iconText' + currentStep
                let itensLine = document.querySelector(itensLineId)
                let itensText = document.querySelector(itensTextId)

                itensLine.classList.add("activeCard");
                itensText.classList.add("active");
            } else {
                createAlert();
                toggleAlert(true, `Passo ${currentStep + 1} não foi preenchido corretamente!`);
            }
        });
    });

    prevButtons.forEach((button) => {
        button.addEventListener("click", function (e) {
            e.preventDefault();
            currentStep--;
            showStep(currentStep);

            let itensLineId = '#lineIcon' + (currentStep + 1)
            let itensTextId = '#iconText' + (currentStep + 1)
            let itensLine = document.querySelector(itensLineId)
            let itensText = document.querySelector(itensTextId)

            itensLine.classList.remove("activeCard");
            itensText.classList.remove("active");
        });
    });

    showStep(currentStep);

    form.addEventListener("submit", function (e) {
        if (stepValidations[3]) {
            e.preventDefault()
            const formData = enviarDados();
            console.log(formData);
            window.location.href = "/src/submit.html";
        } else {
            e.preventDefault()
            createAlert();
            toggleAlert(true, `Passo 4 não foi preenchido corretamente!`);
        }

    });
});

const cnpjInput = document.getElementById("cnpj");
cnpjInput.addEventListener("change", async function () {
    const cnpj = cnpjInput.value;
    stepValidations[0] = await verificaCNPJ(cnpj);
});

const cepjInput = document.getElementById("cep");
const numero = document.getElementById("numero");
const dadosCep = [cepjInput, numero]
dadosCep.forEach(dado => dado.addEventListener("change", async function () {
    stepValidations[1] = await verificaCEP(cepjInput.value, numero.value)
    console.log(stepValidations[1])
}));

const numeroInput = document.getElementById("telefone");
const dddInput = document.getElementById("ddd");
const tipoInput = document.getElementById("tipo-telefone");
const contatos = [numeroInput, tipoInput]
contatos.forEach(contato => contato.addEventListener("change", async function () {
    stepValidations[2] = await verificaNumero(dddInput.value, numeroInput.value, tipoInput.value)

}));

const nomeInput = document.getElementById("nome");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const senhaInput = document.getElementById("senha");
const confirmaSenhaInput = document.getElementById("confirma-senha");
const dadosUser = [nomeInput, usernameInput, emailInput, senhaInput, confirmaSenhaInput]
dadosUser.forEach(dado => dado.addEventListener("change", async function () {
    const campo = dado.id;
    stepValidations[3] = await verificaCamposDoFormulario(campo);
}));
