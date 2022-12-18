require("dotenv").config();
const mongoose = require("mongoose");
const connect = require("./config/db");
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT;
const app = express();
const userRoute=require("./features/User/user.route")
app.use(cors());
app.use(express.json());
app.use("/users",userRoute)

app.get("/", (req, res) => {
  return res.send("All is well");
});

app.listen(PORT, async () => {
  await connect();
  console.log(`server started on http://localhost:/${PORT}`);
});
