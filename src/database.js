const mongoose = require('mongoose');

async function startDB() {
    await mongoose.connect(process.env.MONGODB_URI,{
        useNewUrlParser: true
    })
    console.log('DB connected');
};

module.exports = startDB;