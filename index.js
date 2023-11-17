//config inicial
require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const app = express();


//forma de ler JSON /middlewares (consigo enviar json e receber json)
app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());

//rotas da API
const empresaRoutes = require('./routes/empresaRoutes');
const interesseRoutes = require('./routes/interesseRoutes');
const userRoutes = require('./routes/userRoutes');

//redericionar para empresaRoutes
app.use('/empresa', empresaRoutes)
app.use('/ponto', interesseRoutes)
app.use('/user', userRoutes)


//rota inicial / endpoint
app.get('/', (req, res) => {

    //mostrar req

    res.json({ message: 'Oi Express!'})
});



//porta (para o navegador ver o express)
const DB_USER = process.env.DB_USER 
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)

mongoose
    .connect(
        `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.mvifozl.mongodb.net/bancodaapi?retryWrites=true&w=majority`,
    )
    .then(() =>{
        console.log('Conectamos ao MongoDB!')
        app.listen(3000)
    })
    .catch((err) => console.log(err))

