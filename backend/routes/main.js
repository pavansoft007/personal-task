const express = require('express');
const main=express.Router();


main.get('/',(req,res)=>{
    res.json({message:"Hello World"});
})


module.exports = main;