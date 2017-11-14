
// Require stuff
var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', function (req, res) {
    res.send('Primeira requisição GET');
});

app.listen(3001, function () {
    console.log('Servidor rodando na porta 3001!')
});

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '160520',
    database : 'mrmeetings'
    })


app.get('/user', function (req, res) {
    connection.query('SELECT * FROM user', function (error,
    results, fields) {
    if (error) throw error;
    res.json(results)
    });
    });


// CRIA
app.post('/register', function (req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;

    console.log(name,email,password);
    connection.query("INSERT INTO user (name, email, password) values(?,?,?)",[name,email,password], function (error, results, fields) {
        if (error) throw error;   
            res.json(fields)
        });
    });



//Update
app.post('/update', function (req, res){
    var id = req.body.id;
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    console.log(id, name, email, password)
    connection.query('UPDATE user SET name=?,email=?,password=? WHERE user_id=?',[name,email,password,id],  function (error, results, fields) {
        if (error) throw error;
        res.json(results)
    });
});


//DELETE    

app.post('/delete', function (req, res){
    var user_id = req.body.id
    console.log(user_id)
    connection.query('DELETE FROM user WHERE user_id=?',[user_id],  function (error, results, fields) {
        if (error) throw error;
        res.json(results)
    });
});


