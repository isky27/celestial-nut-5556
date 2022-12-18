<<<<<<< HEAD
const mongoose = require("mongoose");
require("dotenv").config();
const url = process.env.DATABASE_URL;
const connect = () => {
    mongoose.set('strictQuery', false)
  mongoose
    .connect(`${url}`)
   
    .then(() => console.log("mongo connected"))
    .catch((e) => console.log(e));
};
module.exports = connect;
=======
const mongoose = require('mongoose');
require('dotenv').config();

module.exports = () => {
    return mongoose.connect(process.env.MONGO_PATH);
};

>>>>>>> 6597411ebe6f69de30ca1a8474d239562263a913
