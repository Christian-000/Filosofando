const mongoose = require('mongoose');
require('dotenv').config()

async function startDB() {
    await mongoose.connect(process.env.DB_LOCATION,{
        useNewUrlParser: true
    })
    console.log('DB connected');
};

module.exports = startDB;