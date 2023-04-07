const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const _ = require("lodash");
const ejs = require("ejs");
require("dotenv").config();
const session = require("express-session");
const passport = require("passport")
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const findOrCreate = require('mongoose-findorcreate')
//const bcrypt = require("bcrypt");
//const saltRounds = 10;
//const encrypt = require("mongoose-encryption");
//const md5 = require("md5");

const app = express();

app.use(express.static("public"));
app.set("view engine", ejs);
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(session({
    secret: "Ou little secret.",
    resave: false,
    saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://127.0.0.1:27017/userDB"), { useNewUrlParser: true };
//mongoose.set("useCreateIndex", true);

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    googleId: String,
    facebookId: String,
    secretArray: []
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

//console.log(md5("qwerty"))
//console.log(md5("123456"))
//console.log(md5("1"))
// userSchema.plugin(encrypt, { secret: process.env.SECRET, encryptedFields: ['password']});

const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id)
        .then((user, err) => {
            done(err, user)
        })
        .catch((err) => {
            done(err)
        })
});

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/secrets",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
},
    function (accessToken, refreshToken, profile, cb) {
        console.log(profile)
        User.findOrCreate({ googleId: profile.id }, function (err, user) {
            return cb(err, user);
        });
    }
));

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:3000/auth/facebook/secrets",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
},
    function (accessToken, refreshToken, profile, cb) {
        console.log(profile)
        User.findOrCreate({ facebookId: profile.id }, function (err, user) {
            return cb(err, user);
        });
    }
));

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/secrets',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('/secrets');
    });

app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['profile'] }));

app.get('/auth/facebook/secrets',
    passport.authenticate('facebook', { failureRedirect: '/login' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('/secrets');
    });

app.get("/login", (req, res) => {
    res.render("login.ejs");
});

app.get("/logout", (req, res) => {
    req.logout((err) => {
        console.log(err);
    });
    res.redirect('/');
});

app.get("/register", (req, res) => {
    res.render("register.ejs");
});

app.get("/secrets", async (req, res) => {
    try {
        // Procura todos os documentos na coleção 'users' em que o campo 'secret' não é nulo
        const foundUsers = await User.find({ "secretArray": { $ne: null } }).exec();

        // Se não houver documentos encontrados, retorna um status 404 e uma mensagem
        if (!foundUsers) {
            console.log(foundUsers);
            res.status(404).send("Documento não encontrado");
        } else { 
            // Caso contrário, cria uma array de segredos dos usuários encontrados e passa para a view 'secrets.ejs'
            const secrets = foundUsers.map(user => user.secretArray).flat();
            // Caso contrário, renderiza a view 'secrets.ejs', passando os usuários com segredos encontrados na busca
            if (foundUsers) {
                res.render("secrets.ejs", { usersWithSecrets:  secrets});
            }
        }
    } catch (err) {
        // Se ocorrer algum erro na execução do código, exibe o erro no console e retorna um status 500 e uma mensagem
        console.log(err);
        res.status(500).send("Erro interno do servidor");
    }

    /*if (req.isAuthenticated()) {
        res.render("secrets.ejs");
    } else {
        res.redirect("/login");
    }
    */
});

app.get("/submit", (req, res) => {
    if (req.isAuthenticated()) {
        res.render("submit.ejs");
    } else {
        res.redirect("/login");
    }
});

app.post("/submit", (req, res) => {
    const submittedSecret = req.body.secret;
    console.log(req.user._id);

    User.findById(req.user._id)
        .then((result) => {
            if (!result) {
                // documento não encontrado, tratar como erro
                console.log("Documento não encontrado com _id =", req.user_id);
                res.status(404).send("Documento não encontrado");
            } else {
                // documento encontrado, atualizar a propriedade 'secret'
                result.secretArray.push(submittedSecret);
                result.save()
                    .then(() => {
                        res.redirect("/secrets")
                    })
                    .catch((err) => {
                        console.log(err);
                        res.status(500).send("Erro interno do servidor");
                    });

            }
        })
});

app.post("/register", (req, res) => {

    User.register({ username: req.body.username }, req.body.password, (err, user) => {
        if (err) {
            console.log(err);
            res.redirect("/register")
        } else {
            passport.authenticate("local")(req, res, () => {
                res.redirect("/secrets");
            })
        }
    });

    /*
    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
        const newUser = new User({
            email: req.body.username,
            password: hash
            //password: md5(req.body.password)
        });

        newUser.save()
            .then((result) => {
                if (!result) {
                    console.log("ERROR FALTAL");
                } else {
                    res.render("secrets.ejs");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    });*/
});


app.post("/login", (req, res) => {

    const user = new User({
        username: req.body.username,
        password: req.body.password
    });

    req.login(user, (err) => {
        if (err) {
            console.log(err);
        } else {
            passport.authenticate("local")(req, res, () => {
                res.redirect("secrets");
            });
        }
    });


    /*
    const username = req.body.username;
    const password = req.body.password;
    //const password = md5(req.body.password)

    User.findOne({ email: username })
        .then((resultUser) => {
            if (!resultUser) {
                console.log("User not found")
                res.render("login.ejs");
            } else {
                if (resultUser) {
                    bcrypt.compare(password, resultUser.password, function(err, result) {
                        if(result === true){
                            res.render("secrets.ejs");
                        }
                    });
                } else {
                    console.log("Invalid password");
                }
            }
        })
        .catch((err) => {
            console.log(err)
        })*/
});

app.listen(3000, () => {
    console.log("Coneection sucessfully on PORT 3000")
})

