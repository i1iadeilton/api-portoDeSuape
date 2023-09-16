const mongoose = require('mongoose');

//criar tabela empresa
const empresa = mongoose.model('Empresa', {

    id: Number,
    Nome: String,
    Atividade: String,
    Município: String,
    Polo: String,
    Endereço: String,
    Contato: String,
    Latitude: String,
    Longitude: String,
})

module.exports = empresa