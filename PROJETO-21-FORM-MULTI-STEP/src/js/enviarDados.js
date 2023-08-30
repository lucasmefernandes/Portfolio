export function enviarDados() {
    const cnpjValue = document.getElementById("cnpj").value;
    const nomeFantasiaValue = document.getElementById("nome-fantasia").value;
    const razaoSocialValue = document.getElementById("razao-social").value;
    const cepValue = document.getElementById("cep").value;
    const numeroValue = document.getElementById("numero").value;
    const ruaValue = document.getElementById("rua").value;
    const estadoValue = document.getElementById("estado").value;
    const complementoValue = document.getElementById("complemento").value;
    const cidadeValue = document.getElementById("cidade").value;
    const bairroValue = document.getElementById("bairro").value;
    const dddValue = document.getElementById("ddd").value;
    const telefoneValue = document.getElementById("telefone").value;
    const tipoTelefoneValue = document.getElementById("tipo-telefone").value;
    const whatsappValue = document.getElementById("whatsapp").checked;
    const nomeValue = document.getElementById("nome").value;
    const usernameValue = document.getElementById("username").value;
    const emailValue = document.getElementById("email").value;
    const senhaValue = document.getElementById("senha").value;
    const confirmaSenhaValue = document.getElementById("confirma-senha").value;

    const formData = {
        cnpj: cnpjValue,
        nomeFantasia: nomeFantasiaValue,
        razaoSocial: razaoSocialValue,
        cep: cepValue,
        numero: numeroValue,
        rua: ruaValue,
        estado: estadoValue,
        complemento: complementoValue,
        cidade: cidadeValue,
        bairro: bairroValue,
        ddd: dddValue,
        telefone: telefoneValue,
        tipoTelefone: tipoTelefoneValue,
        whatsapp: whatsappValue,
        nome: nomeValue,
        username: usernameValue,
        email: emailValue,
        senha: senhaValue,
        confirmaSenha: confirmaSenhaValue
    };

    return formData;
}