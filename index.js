const express=require('express')
const app=express();
const port= process.env.PORT || 5000;

const courses=require('./data/cousrses.json');

app.get('/',(req,res)=>{
    res.send('course api running');
})

app.get('/courses',(req,res)=>{
    res.send(courses);
})
app.get('/courses',(req,res)=>{
    res.send(courses);
})

app.listen(port,()=>{
    console.log('course api running on port');
})