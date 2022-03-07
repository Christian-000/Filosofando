const mongoose = require('mongoose');

async function startDB() {
    await mongoose.connect('mongodb://localhost/citas-filosoficas',{
        useNewUrlParser: true
    })
    console.log('DB connected');
};

module.exports = startDB;