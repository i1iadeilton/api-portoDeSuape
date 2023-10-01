const mongoose = require('mongoose');

//criar tabela empresa
const ponto = mongoose.model('PontoDeInteresse', {

    id: Number,
    Nome: String,
    Atividade: String,
    Endereço: String,
    Contato: String,
    Latitude: String,
    Longitude: String,
})

module.exports = ponto