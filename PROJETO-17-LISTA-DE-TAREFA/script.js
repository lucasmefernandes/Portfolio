const express = require("express")
const bodyParser = require("body-parser")
const date = require(__dirname + "/date.js")

const app = express()

let items = [];
let workItems = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"));

app.listen(3000, function () {
    console.log("Server started on localhost:3000/ - STATUS: OK")
});

app.get("/", function (req, res) {



    res.render("list", { listTitle: date, newLisItems: items });

});

app.post("/", function (req, res) {
    let addNewItem = req.body.newItem;

    if (req.body.list === "Work") {
        workItems.push(addNewItem);
        res.redirect("/work");

    } else {
        items.push(addNewItem);
        res.redirect("/");
    }

})

app.get("/work", function (req, res) {
    res.render("List", { listTitle: "Work List", newLisItems: workItems })
})

app.post("/work", function (req, res) {
    let addWorkItem = req.body.newItem;

    workItems.push(addWorkItem);

    res.redirect("/work");
})

