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
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password
    const confirmpassword = req.body.confirmpassword

    const mysqlInsert = "INSERT INTO signup (username, email, password, confirmpassword) VALUES (?,?,?,?);"
    db.query(mysqlInsert,[username, email, password, confirmpassword], (err,result)=>{
        if(err) {
            console.log(err)
        }
    })
})

//delete data from database
app.get('/api/delete',(req,res)=>{
    const name = ''
    const mysqlDelete = 'DELETE FROM signup WHERE username = ?'
    db.query(mysqlDelete,name,(err,result)=>{
        if(err) {
            console.log(err)
        }else{
            res.send('data deleted');
        }
    })
})

//delete data from database
app.delete('/api/unsubscribe/:emaillist',(req,res)=>{
    const email = req.params.emaillist
    const mysqlDelete = 'DELETE FROM signup WHERE email = ?'
    db.query(mysqlDelete,email,(err,result)=>{
        if(err) {
            console.log(err)
        }else{
            res.send('Unsubscription successfull');
        }
    })
})

//fetch data from database
app.get('/api/get',(req,res)=>{
    const mysqlFetch = 'SELECT * from signup';
    db.query(mysqlFetch,(err,result)=>{
        if(err) {
            console.log(err)
        }else{
            res.send(result);
        }
    })
})

app.listen(3001,()=>{
    console.log('Running on port 3001 ');
});