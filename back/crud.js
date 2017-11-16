
// Require stuff
var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', function (req, res) {
    res.send('ITS WORKING');
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
    connection.query('SELECT * FROM User', function (error,
    results, fields) {
    if (error) throw error;
    res.json(results)
    });
    });


// CRIA
app.post('/register', function (req, res) {
//    var data = JSON.parse(req.body);
   console.log(req);

    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;

    connection.query("INSERT INTO User (name, email, password) values(?,?,?)",[name,email,password], function (error, results, fields) {
        if (error) throw error;   
            res.json(req.body)
        }); 
    });

// LOGIN

app.post('/login', function (req, res) {
//    var data = JSON.parse(req.body);
//    console.log(req);

    var name = req.body.name;
    var password = req.body.password;

    connection.query("SELECT COUNT(*) FROM User WHERE name=? AND password=? LIMIT 1",[name,password], function (error, results, fields) {
        var data = JSON.stringify(results);
        var json = JSON.parse(data)
        var number = json[0]['COUNT(*)'];
        if (error) throw error;
        if (number != 0){
            res.json(req.body);

        }   

            
    }); 


});



//Update
app.post('/update', function (req, res){
    var id = req.body.id;
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    console.log(id, name, email, password)
    connection.query('UPDATE User SET name=?,email=?,password=? WHERE user_id=?',[name,email,password,id],  function (error, results, fields) {
        if (error) throw error;
        res.json(results)
    });
});


//DELETE    

app.post('/delete', function (req, res){
    var user_id = req.body.id
    console.log(user_id)
    connection.query('DELETE FROM User WHERE user_id=?',[user_id],  function (error, results, fields) {
        if (error) throw error;
        res.json(results)
    });
});


