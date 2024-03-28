const express = require("express");
const dotenv = require('dotenv')
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/db");
const bookRoutes = require('./routes/BooksRoute')
//config
dotenv.config();
app.use(cors()); 

connectDB()

const PORT = process.env.PORT || 8080 || 5000;

app.use(morgan("dev"));
app.use(express.json())

app.use('/bookstore/books', bookRoutes)

app.get("/" , (req, res)=>{
    res.send({
        message:"welcome to express"
    })
})

app.listen(PORT, ()=> console.log(`server running on port ${PORT} in ${process.env.DEV_MODE}`))