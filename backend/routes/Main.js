import express from 'express';
const main=express.Router();


main.get('/',(req,res)=>{
    res.json({message:"Hello World"});
})


export default main;