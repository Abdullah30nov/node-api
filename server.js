const express = require('express');
const app = express()
require('dotenv').config();

const PPORT = process.env.PORT || 3300
const obj = [
    {
        "helo":"knkn",
        "age":"20202"
    }
]
app.get('/' , async(req,res)=>{
    res.json(obj)
})

app.listen(PPORT,()=>{
    console.log("hello" , PPORT)
})