const mongoose = require("mongoose")

const dotenv = require('dotenv').config();

//connect to mongodb database using moongose

const connectDB = async ()=>{
    try{
          const conn = await mongoose.connect(process.env.MONGO_URL);
          console.log(`mongodb connection... ${conn.connection.host}`);
    }
    catch(error){
        console.log(`error in connection ${error}`);
    }
}

module.exports = connectDB