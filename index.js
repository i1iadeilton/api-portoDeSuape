//config inicial
const express = require('express');
const mongoose = require('mongoose');
const app = express();

//forma de ler JSON /moddlewares (consigo enviar json e receber json)
app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());

//rota inicial / endpoint
app.get('/', (req, res) => {

    //mostrar req

    res.json({ message: 'Oi Express!'})
});

//mongodb+srv://equipe:equipe123456@cluster0.mvifozl.mongodb.net/bancodaapi?retryWrites=true&w=majority

//porta (para o navegador ver o express)
const DB_USER = 'equipe';
const DB_Password = encodeURIComponent('equipe123456')

mongoose
    .connect(
        `mongodb+srv://${DB_USER}:${DB_Password}@cluster0.mvifozl.mongodb.net/bancodaapi?retryWrites=true&w=majority`,
    )
    .then(() =>{
        console.log('Conectamos ao MongoDB!')
        app.listen(3000)
    })
    .catch((err) => console.log(err))

