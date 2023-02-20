const express= require("express");
   
 const app =express(); //instance of express 
  const  fs =require('fs');
  const path =require('path')

 

 app.get('/',(req,res)=>{
    res.send('<h1> Welcome to home page with express</h1>')
    res.end()
 })

 app.get('/gallery',(req,res)=>{
    res.send(" Here it is gallery page from get method ")
    res.end()
 });

 app.get('/submit',(req,res)=>{
    res.send("Get of submit")
 })

//  app.post('/submit',(req,res)=>{
    
// res.send("post worked")
// res.end();
//  });
 app.listen(4500,()=>{
    console.log("server started")
 })

 
 