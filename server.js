const express = require("express");
const app  = express();
const dotenv  = require("dotenv")
dotenv.config();
const port = process.env.PORT|3000;
const hostName = process.env.HOST_NAME;
const {sequelize,connectToDb} = require('./database')

//connection to database here 
connectToDb(sequelize);

// handle requests here GET/POST/PUT/PATCH/DELETE

app.get('/',function(req,res,next){
    console.log(req);

    res.send("hello world");
})

app.listen(port,function(){
    console.log(`server is listening on ${hostName}:${port}`);
})





