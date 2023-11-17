const mongoose = require('mongoose');

//criar tabela user
const user = mongoose.model('User', {

    id: Number,
    Name: String,
    Username: String,
    Email: String,
    Password: String,
    Role: String
})

module.exports = user