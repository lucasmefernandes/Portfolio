const express = require("express"); // Importa o módulo Express
const bodyParser = require("body-parser"); // Importa o módulo body-parser
const mongoose = require("mongoose"); // Importa o módulo mongoose
const _ = require("lodash");
require('dotenv').config();

const dbHost = process.env.HOST_DB;
const app = express(); // Cria uma nova instância do Express

app.set('view engine', 'ejs'); // Define a engine de visualização como ejs

app.use(bodyParser.urlencoded({ extended: true })); // Usa o body-parser para interpretar requisições de formulários
app.use(express.static("public")); // Define a pasta "public" como pública para servir arquivos estáticos

mongoose.connect(dbHost, { useNewUrlParser: true }); // Conecta ao banco de dados MongoDB em localhost:27017/todolistDB, usando o driver padrão e configuração de URL.

const itemsSchema = { // Define o schema para os itens de uma lista de tarefas
  name: String
};

const Item = mongoose.model("Item", itemsSchema); // Cria um modelo de Item com base no schema

const items1 = new Item({ // Cria três instâncias de Item com valores padrão
  name: "Welcome to your todolist!"
});

const items2 = new Item({
  name: "Hit the + button to aff a new item."
});

const items3 = new Item({
  name: "<-- Hit this to delete an item."
});

const defaultItems = [items1, items2, items3]; // Cria um array de itens padrão

const ListSchema = { // Define o schema para uma lista de tarefas, que pode conter vários itens
  name: String,
  items: [itemsSchema]
}

const List = mongoose.model("List", ListSchema); // Cria um modelo de Lista com base no schema

app.get("/", function (req, res) { // Define uma rota para a página inicial

  Item.find({}) // Busca todos os itens do banco de dados

    .then((results) => { // Quando a busca estiver concluídaconsole.log('Buscando os itens')
      if (results.length === 0) { // Se não houver itens no banco de dados
        Item.insertMany(defaultItems) // Insere os itens padrão no banco de dados
          .then(() => {
            console.log("Successfully saved default items to DB.") // Quando a inserção estiver concluída, exibe uma mensagem no console
          })
          .catch((err) => {
            console.log(err) // Se houver erro na inserção, exibe o erro no console
          })
        res.redirect('/'); // Redireciona para a página inicial
      } else { // Se houver itens no banco de dados
        res.render("list", { listTitle: "Today", newListItems: results }); // Renderiza a página de listas de tarefas, passando a lista de itens encontrada como parâmetro
      }
    })

    .catch((err) => {
      console.log(err) // Se houver erro na busca, exibe o erro no console
    })
})

// Rota para lidar com o envio de um novo item para a lista
app.post("/", function (req, res) {

  // Extrai o nome do item e da lista do corpo da requisição
  const itemName = req.body.newItem;
  const listName = req.body.list;

  // Cria um novo objeto Item com o nome do item
  const newItens = new Item({
    name: itemName
  });

  // Verifica se a lista é "Today", se sim, salva o novo item e redireciona para a página inicial
  if (listName === "Today") {
    newItens.save();
    res.redirect('/')
  } else {
    // Se a lista não for "Today", procura a lista correspondente no banco de dados
    List.findOne({ name: listName })
      .then((foundList) => {
        // Adiciona o novo item à lista encontrada e salva a lista
        foundList.items.push(newItens);
        foundList.save();
        // Redireciona para a página da lista correspondente
        res.redirect('/' + listName);
      })
      .catch((err) => {
        console.log(err)
      })
  }
});

// Define um endpoint para lidar com solicitações POST para "/delete"
app.post("/delete", function (req, res) {

  // Obtém o ID do item que deve ser excluído a partir dos dados enviados na solicitação
  const checkedItemId = req.body.checkbox;

  // Obtém o nome da lista a partir dos dados enviados na solicitação
  const listNameD = req.body.listNameD;

  // Verifica se o nome da lista é "Today". Se for, exclui o item com o ID correspondente usando o método findOneAndDelete do modelo Item
  if (listNameD === "Today") {
    Item.findOneAndDelete({ _id: checkedItemId })
      .then((doc) => {
        console.log(`${checkedItemId} removed successfully`);
        res.redirect('/');
      })
      .catch((err) => {
        console.log(err);
      })
  }
  // Se o nome da lista não for "Today", encontra a lista correspondente usando o método findOne do modelo List e remove o item com o ID correspondente usando o operador $pull
  else {
    List.findOneAndUpdate({ name: listNameD }, { $pull: { items: { _id: checkedItemId } } })
      .then((doc) => {
        console.log(`${checkedItemId} removed successfully`)
        res.redirect(`/${listNameD}`);
      })
      .catch((err) => {
        console.log(err);
      })
  }

})


app.get('/:customListName', async function (req, res) {
  const customListName = _.capitalize(req.params.customListName);  // Transforma o valor do parâmetro customListName em uma string com a primeira letra maiúscula usando a função capitalize() do pacote lodash.

  try {
    const foundList = await List.findOne({ name: customListName });  // Busca uma lista com o nome customListName no banco de dados usando o método findOne() do modelo List, usando a sintaxe do ES8 async/await.
    if (!foundList) {  // Se a lista não for encontrada no banco de dados, executa o bloco de código dentro deste if.
      const list = new List({  // Cria um novo objeto List com o nome customListName e uma lista de itens padrão defaultItems.
        name: customListName,
        items: defaultItems
      });
      await list.save();  // Salva o novo objeto List no banco de dados, usando a sintaxe do ES8 async/await.
      res.redirect('/' + customListName);  // Redireciona o usuário para a página correspondente à lista personalizada recém-criada.
    } else {  // Se a lista for encontrada no banco de dados, executa o bloco de código dentro deste else.
      res.render('list', { listTitle: foundList.name, newListItems: foundList.items });  // Renderiza a página 'list' com os dados da lista encontrada no banco de dados.
    }
  } catch (err) {
    console.log(err);  // Define uma função de callback que será chamada se ocorrer um erro durante a busca no banco de dados, registrando o erro no console.
  }
});

// Define um endpoint para lidar com solicitações GET para "/about"
app.get("/about", function (req, res) {

  // Renderiza a página "about"
  res.render("about");
});

const port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log(`Server started on port ${port}`);
});