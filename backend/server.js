const express = require('express');
const port = 3000;

const connect = require('./dbconnection/dbconnect');
 const router = require('./router/router')
const app = express()
const cors = require('cors');
connect.dbconnction

app.use(express.json())
app.use(cors());

app.use('/',router)

// Middleware to parse JSON bodies
// app.use(bodyParser.json());

// Middleware to parse URL-encoded bodies
// app.use(bodyParser.urlencoded({ extended: true }));
app.listen(3001,(err )=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("server is working on port 3000");
    }
})
module.exports=app