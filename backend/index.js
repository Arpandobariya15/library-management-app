const express = require ("express");
const app = express();
const dotenv = require("dotenv").config();
const connectDb= require("./config/connectionDb");

const PORT = process.env.PORT || 3000;
connectDb();
app.use(express.json())

app.use("/api", require ("./routes/books"))

app.listen(PORT,(err)=>{
    console.log(`app is running on ${PORT}`);
})