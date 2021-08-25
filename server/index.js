const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
//connect database
const mysql = require('mysql');
const { urlencoded } = require('body-parser');
const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'kbaree123BD111',
    database: 'fullwebsite',
});
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}));
//express version 4.16 =>
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//add data from frontend
app.post('/api/insert',(req,res)=>{
    /*const username = req.body.username
    const email = req.body.email
    const password = req.body.password
    const confirmpassword = req.body.confirmpassword*/

    const mysqlInsert = 'INSERT INTO signup (username, email, password, confirmpassword) VALUES (eyahya,eyahyakhan@gmail.com,kbaree1234,kbaree123456t);'
    db.query(mysqlInsert,[username,email,password,confirmpassword],(err,result)=>{
        //db.query(mysqlInsert,[username,email,password,confirmpassword],(err,result)=>{
        if(err) {
            console.log(err)
        }else{
            res.send(result);
        }
    })
})


//fetch data from database
app.get('/api/get',(req,res)=>{
    const mysqlFetch = 'SELECT * from signup';
    db.query(mysqlFetch,(err,result)=>{
        res.send(result);
    })
})

app.get('/', (req, res) => {
    res.send('Good morning! welcome');
  })

app.listen(3001,()=>{
    console.log('Running on port 3001 ');
});