const express = require('express');
const app = express();
const db = require('./db');
const signup = require('./Models/signup')
 const bodyparser = require('body-parser');

 const PORT = 3000

  app.use(bodyparser.json())


app.post('/signup',async(req,res)=>{
try {
    const data = req.body;

    const newSignup = new signup(data);
    const response = await newSignup.save()
    res.status(200).json(response);
    console.log('data save succesfully');
} catch (error) {
    res.status(500).json(error);
    console.log('internal server error');
}
})

app.get('/login',async(req,res)=>{
   try {
    const data = await signup.findOne();
    console.log('data fetched successfully')
    res.status(200).json(data);
    
   } catch (error) {
    res.status(500).json({error:"internal sever error"})
     console.log(error)
   }
})

app.get('/',(req,res)=>{
 res.send('hello world')
})

app.listen(PORT,()=>{
    console.log('this app listing on 3000');
})