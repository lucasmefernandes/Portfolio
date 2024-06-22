fetch("./assets/json/produtcs.json")
  .then((response) => response.json())
  .then((data) => createData(data))
  .catch((error) => console.log(error));

document.addEventListener("DOMContentLoaded", () => {
  const cadastroForm = document.getElementById("cadastro-form");

  if (cadastroForm) {
    cadastroForm.addEventListener("submit", (event) => {
      event.preventDefault();
      alert("Cadastro realizado com sucesso!");
    });
  }
});

function createData(data) {
  const necessidadesList = document.getElementById("product-container");
  data.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.className = "product";
    productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>Preço: R$ ${product.price.toFixed(2)}</p>
            <button id="doar" class='button-doacao'>Doar</button>
        `;
    necessidadesList.appendChild(productElement);
  });

  const doacoesForm = document.querySelectorAll("#doar");
  if (doacoesForm) {
    doacoesForm.forEach((button) => {
      button.addEventListener("click", (event) => {
        alert("Doação registrada com sucesso!");
      });
    });
  }
}
