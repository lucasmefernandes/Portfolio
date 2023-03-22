const express = require("express")
const bodyParser = require("body-parser")
const request = require("request")
const https = require("https")
require('dotenv').config()
const SECRET_KEY = process.env.SECRET_KEY;
const SECRET_URL = process.env.SECRET_URL;

const app = express()


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + '/index.html')
});

app.post("/", function (req, res) {
    const nome = req.body.nome;
    const sobrenome = req.body.sobrenome;
    const email = req.body.email;

    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: nome,
                    LNAME: sobrenome,
                }

            }
        ]
    }

    const jsonData = JSON.stringify(data);

    const url = SECRET_URL

    const options = {
        method: "POST",
        auth: SECRET_KEY
    }

    const request = https.request(url, options, function (response) {
        
            if (response.statusCode === 200) {
                res.sendFile(__dirname + "/sucesso.html")
            } else {
                res.sendFile(__dirname + "/falha.html")
            }
        


        response.on("data", function (data) {
            console.log(JSON.parse(data));
        })
    })

    request.write(jsonData);
    request.end();

});

app.post("/falha", function(req, res) {
    res.redirect("/")
})


app.listen(process.env.PORT || 8080, function () {
    console.log("Servidor funcionando e ligado a port ")
});

