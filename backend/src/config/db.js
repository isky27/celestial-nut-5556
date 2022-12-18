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
