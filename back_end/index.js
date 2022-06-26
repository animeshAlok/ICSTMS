const express = require("express");
const mongo = require("mongoose");
const cors= require("cors")
// const axios = require("axios")
const app=express();
const port = 8000;
app.use(cors())
app.use(express.json())
// app.use(express.json({limit: '100mb'}));
// app.use(express.urlencoded({limit: '100mb'}));
app.use( express.json({limit: '10000mb'}) );
app.use(express.urlencoded({
  limit: '10000mb',
  extended: true,
  parameterLimit:50000
}));
// install "cors" to work done

let url="mongodb+srv://ronisikder:6291785756@cluster0.vs57g.mongodb.net/Match_Details?retryWrites=true&w=majority"

mongo.connect(url,{useNewUrlParser: true},(err,res)=>{
    if(res){
        console.log('DataBase Connection Successfull');
    }
    else{
        console.log('Opps!..Error Heppend');
    }
})

let macha = new mongo.Schema({
    college : String,
    points : Number
})

let scha=new mongo.Schema({
    nam:String,
    des:String,
    id:String,
    imaga: String,
    date:String,
    matchs:[macha],
    masch: String,
    leader: String
})

let user = new mongo.Schema({
    email : String,
    pass : String,
    college : String
})

let hold = new mongo.model("match",scha);
let vold= new mongo.model("college",user);

app.post('/register',(req,res)=>{
    const {nam,des,id,date,imaga}=req.body
    let demo = new hold({
        nam,
        des,
        id,
        date,
        imaga
    })

    console.log(demo);
    demo.save((err)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send({message:"successfully added"})
        }
    })
})

app.get('/view',(req,res)=>{
    hold.find({},(err,data)=>{
        if(err){
            res.send(err)
        }
        else{
            res.json(data)
        }
    })
})

app.get('/view/:id', (req,res) => {
    console.log(req.params.id);
    hold.findById(req.params.id, (err, data)=> {
        if(err){
            res.send(err)
        }
        else{
            res.json(data)
        }
    })
})

app.post('/view/:id', (req, res) => {
    hold.findByIdAndUpdate(req.params.id, {$push: { matchs:{college:req.body.name, points:0.0} }}, (err, scha) => {
        if(err){
            res.send(err.message)
        }
        else {
            res.send({message: "Updated!!!"});
        }
    })
})

app.patch('/view/:id', (req, res) => {
    let { nam, des, date, masch, leader } = req.body;
    hold.findByIdAndUpdate(req.params.id, { nam: nam, des: des, date: date, masch: masch, leader: leader}, (err) => {
        if(err) {
            res.send(err.message)
        }
        else {
            res.send({message: "Updated!!!"});
        }
    })
})

app.post('/login',(req,res)=>{
    const { email, pass } =req.body
    console.log(req.body);
    vold.findOne({email:email},(err,user)=>{
            if(user){
                if(pass===user.pass){
                    res.send({message:"Log In Successfull",checker: user.college})
                }
                else{
                    res.send({message:"Fuck Off! Your not a Autherised User Dump Asshole!"})
                }
            }
            else{
                res.send({message:"No User Exist! Please Sign Up First"})
            }
    })
})

app.get('/college', (req, res) => {
    vold.find({},(err,data)=>{
        if(err){
            res.send(err)
        }
        else{
            res.json(data)
        }
    })
})

app.get('/',(req,res)=>{
    res.send("fuck world")
})

app.listen(port,(res)=>{
    if(res){
        console.log("Someting Error Occurs")
    }
    else{
        console.log("Server Started at Port "+port)
    }
})
