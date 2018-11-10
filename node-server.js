const http=require('http');
const express=require('express');
const app=express();
const mySql=require('mysql');
var bodyParser = require('body-parser');
const mySqlConnection=mySql.createConnection({
    user: 'root',
    password: 'admin',
    host: 'localhost',
    database: 'rentamovie'
});

app.use(bodyParser.json())

mySqlConnection.connect((err) => {
    if(err) 
        console.log(err);
    else 
        console.log('Connection successful.')
});

app.get('/movies/:name/:genre/:year',(req,res) => {
    let sql='select * from movies';
    let params = req.params;
    let where = '';
    if(params.name !== '-1')
        where =`name like '%`+req.params.name + `%'`;
    if(params.genre !== '-1') {
        if(where === '') {
            where = `genre like '%` + params.genre + `%'`;
        } else {
            where += ` and genre like '%` + params.genre + `%'`;
        }
    }
    if(params.year !== '-1') {
        if(where === '') {
            where = `year = ` + params.year;
        } else {
            where += ` and year = ` + params.year;
        }
    }
    if(where !== '')
        where = ' where ' + where;
    sql += where;
    mySqlConnection.query(sql,(err,rows,fields)=>{
        if(err)
            console.log(err);
        else
            res.send(rows);
    })
});
app.get('/movies/:id',(req,res) => {
    let sql='select * from movies where id = ' + req.params.id;
    mySqlConnection.query(sql,(err,rows,fields)=>{
        if(err)
            console.log(err);
        else
            res.send(rows);
    })
});
app.get('/users',(req,res) => {
    mySqlConnection.query('select * from users',(err,rows,fields) =>{
        if(err)
            console.log(err);
        else
            res.send(rows);
    })
});

app.get('/users/:id',(req,res) => {
    mySqlConnection.query('select * from users where id=?',[req.params.id],(err,rows,fields) =>{
        if(err)
            console.log(err);
        else
            res.send(rows);
    })
});
app.post('/updateuser',(req,res) => {
    let params = req.body;
    mySqlConnection.query('update users set username=?, name=? where id=?',[params.username, params.name, params.id],(err,rows,fields) =>{
        if(err)
            console.log(err);
        else
            console.log('User updated.');
    })
});
app.get('/price',(req,res) => {
    mySqlConnection.query('select * from price',(err,rows,fields) =>{
        if(err)
            console.log(err);
        else
            res.send(rows);
    })
});
app.post('/updateprice',(req,res) => {
    let params = req.body;
    mySqlConnection.query('update price set price=?, valute=?',[params.price, params.valute],(err,rows,fields) =>{
        if(err)
            console.log(err);
        else
            console.log('User updated.');
    })
});
app.delete('/deleteuser/:id',(req,res) => {
    mySqlConnection.query('delete from users where id=?',[req.params.id],(err,rows,fields) =>{
        if(err)
            console.log(err);
        else
            res.send(rows);
    })
});
app.post('/updatemovie',(req,res) => {
    console.log(req.body);
    let params=req.body;
    let query= "update movies set name=?, genre=?, year=?, description=? where id=?";
    mySqlConnection.query(query,[params.name,params.genre,params.year,params.description,params.id],(err,rows,fields) =>{
        if(err)
            console.log(err);
        else
            console.log('Movie updated.');
    })
});

app.post('/addmovie',(req,res) => {
    let params=req.body;
    let query= "insert into movies(name, genre, year, description) values(?,?,?,?)";
    mySqlConnection.query(query,[params.name,params.genre,params.year,params.description],(err,rows,fields) =>{
        if(err)
            console.log(err);
        else
            console.log('Movie added.');
    })
});

app.delete('/deletemovie/:id',(req,res) => {
    let query= "delete from movies where id=?";
    mySqlConnection.query(query,[req.params.id],(err,rows,fields) =>{
        if(err)
            console.log(err);
        else
            console.log('Movie deleted.');
    })
});
app.post('/rentmovie',(req,res) => {
    let params=req.body;
    let date=Date.now();
    let query= "update movies set rented_by=?, date_rented=? where id=?";
    mySqlConnection.query(query,[params.rented_by, date, params.id],(err,rows,fields) =>{
        if(err)
            console.log(err);
        else
            console.log('Movie rented.');
    })
});

app.post('/adduser',(req,res) => {
    let query= "insert into users(username, name) values(?,?)";
    mySqlConnection.query(query,[req.body.username,req.body.name],(err,rows,fields) =>{
        if(err)
            console.log(err);
        else
            console.log('User added.');
    })
});
app.post('/returnmovie',(req,res) => {
    let params=req.body;
    let query= "update movies set rented_by=null, date_rented = null where id=?";
    mySqlConnection.query(query,[params.id],(err,rows,fields) =>{
        if(err)
            console.log(err);
        else {
            console.log('Movie returned.');
        }
    })
});
app.listen(3000,(err) => {
    if(err){
        console.log(err);
    } else {
        console.log('Listening on port 3000.')
    }
})