const mongoose = require("mongoose");

const ConnectDb = async() =>{
    return mongoose.connect(process.env.MONGO_URL);
}

module.exports = ConnectDb;