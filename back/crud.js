

// Require stuff
var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var listQuery = [];
var teamSchedules = [];
var numberMembers = 0;
var countQuery = 0;
var countSchedules = 0;
var duration = 0;
var meetingName = "";

var days = [["monday_6","monday_7","monday_8","monday_9","monday_10","monday_11","monday_12","monday_13","monday_14","monday_15","monday_16","monday_17","monday_18","monday_19","monday_20","monday_21","monday_22","monday_23"],
["tuesday_6","tuesday_7","tuesday_8","tuesday_9","tuesday_10","tuesday_11","tuesday_12","tuesday_13","tuesday_14","tuesday_15","tuesday_16","tuesday_17","tuesday_18","tuesday_19","tuesday_20","tuesday_21","tuesday_22","tuesday_23"],
["wednesday_6","wednesday_7","wednesday_8","wednesday_9","wednesday_10","wednesday_11","wednesday_12","wednesday_13","wednesday_14","wednesday_15","wednesday_16","wednesday_17","wednesday_18","wednesday_19","wednesday_20","wednesday_21","wednesday_22","wednesday_23"],
["thursday_6","thursday_7","thursday_8","thursday_9","thursday_10","thursday_11","thursday_12","thursday_13","thursday_14","thursday_15","thursday_16","thursday_17","thursday_18","thursday_19","thursday_20","thursday_21","thursday_22","thursday_23"],
["friday_6","friday_7","friday_8","friday_9","friday_10","friday_11","friday_12","friday_13","friday_14","friday_15","friday_16","friday_17","friday_18","friday_19","friday_20","friday_21","friday_22","friday_23"],
["saturday_6","saturday_7","saturday_8","saturday_9","saturday_10","saturday_11","saturday_12","saturday_13","saturday_14","saturday_15","saturday_16","saturday_17","saturday_18","saturday_19","saturday_20","saturday_21","saturday_22","saturday_23"],
["sunday_6","sunday_7","sunday_8","sunday_9","sunday_10","sunday_11","sunday_12","sunday_13","sunday_14","sunday_15","sunday_16","sunday_17","sunday_18","sunday_19","sunday_20","sunday_21","sunday_22","sunday_23"]  
];

var mailgun = require("mailgun-js");
var api_key = 'key-de72338c2fa84b7f3d13eded05975dbb';
var DOMAIN = 'sandbox0bf6a56b0a8244ff94f7bec3da0dec2e.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: DOMAIN});



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', function (req, res) {
    res.send('ITS WORKING');
});

app.listen(process.env.PORT || 5000, function () {
    console.log('Servidor rodando na porta 3001!')
});

var connection = mysql.createConnection({
    host : 'us-cdbr-iron-east-05.cleardb.net',
    user : 'bf0bacdeb1bdb7',
    password : '4795134e',
    database : 'heroku_c1381814bae52ae'
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
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    var id_user;

    connection.query("INSERT INTO User (name, email, password) values(?,?,?)",[name,email,password], function (error, results, fields) {
        if (error) throw error;   
            
    }); 
    

    connection.query("SELECT id FROM User WHERE name=?",[name], function (error, results, fields) {
        if (error) throw error;   
            var data = JSON.stringify(results);
            var json = JSON.parse(data);
            id_user = json[0]['id'];
            res.json(id_user)
            connection.query("INSERT INTO Schedule (id_user) values(?)",[id_user], function (error, results, fields) {
                if (error) throw error;   
            }); 
    }); 


});
    

// LOGIN

app.post('/login', function (req, res) {
    var name = req.body.name;
    var password = req.body.password;

    connection.query("SELECT COUNT(*) FROM User WHERE name=? AND password=? LIMIT 1",[name,password], function (error, results, fields) {
        var data = JSON.stringify(results);
        var json = JSON.parse(data);
        var number = json[0]['COUNT(*)'];
        if (error) throw error;
        if (number != 0){
            
            connection.query("SELECT id FROM User WHERE name=?",[name], function (error, results, fields) {
                if (error) throw error;   
                var data = JSON.stringify(results);
                var json = JSON.parse(data);
                id_user = json[0]['id'];
                res.json(id_user);
            });

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



app.post('/delete', function (req, res){
    var user_id = req.body.id
    console.log(user_id)
    connection.query('DELETE FROM User WHERE user_id=?',[user_id],  function (error, results, fields) {
        if (error) throw error;
        res.json(results)
    });
});

function updateSchedule(start, end, day, id, action){

    switch(day){
        case 0:
            for (i = start; i < end; i++){
                //console.log(days[0][i-6]);
                qry = "UPDATE Schedule SET "+days[0][i-6]+"=? WHERE id_user=?";
                connection.query(qry,[action, id],  function (error, results, fields) {
                    if (error) throw error;
                    
                });
                if(action !== 1){
                    console.log('[BACKEND] Created event: ' + days[0][i-6]);
                }else{
                    console.log('[BACKEND] Deleted event: ' + days[0][i-6]);
                }
            }
            break;
        case 1:
            for (i = start; i < end; i++){
                qry = "UPDATE Schedule SET "+days[1][i-6]+"=? WHERE id_user=?";
                connection.query(qry,[action, id],  function (error, results, fields) {
                    if (error) throw error;
                    
                });
                if(action !== 1){                         
                    console.log('[BACKEND] Created event: ' + days[1][i-6]);                     
                }else{
                    console.log('[BACKEND] Deleted event: ' + days[1][i-6]);                     
                }
            }
            break;
        case 2:
            for (i = start; i < end; i++){
                qry = "UPDATE Schedule SET "+days[2][i-6]+"=? WHERE id_user=?";
                connection.query(qry,[action, id],  function (error, results, fields) {
                    if (error) throw error;
                    
                });
                if(action !== 1){                         
                    console.log('[BACKEND] Created event: ' + days[2][i-6]);                     
                }else{                         
                    console.log('[BACKEND] Deleted event: ' + days[2][i-6]);                     
                }
            }
            break;
        case 3:
            for (i = start; i < end; i++){
                qry = "UPDATE Schedule SET "+days[3][i-6]+"=? WHERE id_user=?";
                connection.query(qry,[action, id],  function (error, results, fields) {
                    if (error) throw error;
                    
                });
                if(action !== 1){                         
                    console.log('[BACKEND] Created event: ' + days[3][i-6]);                     
                }else{                         
                    console.log('[BACKEND] Deleted event: ' + days[3][i-6]);                     
                }
            }
            break;
        case 4:
            for (i = start; i < end; i++){
                qry = "UPDATE Schedule SET "+days[4][i-6]+"=? WHERE id_user=?";
                connection.query(qry,[action, id],  function (error, results, fields) {
                    if (error) throw error;
                    
                });
                if(action !== 1){                         
                    console.log('[BACKEND] Created event: ' + days[4][i-6]);                     
                }else{                         
                    console.log('[BACKEND] Deleted event: ' + days[4][i-6]);                     
                }
            }
            break;
        case 5:
            for (i = start; i < end; i++){
                qry = "UPDATE Schedule SET "+days[5][i-6]+"=? WHERE id_user=?";
                connection.query(qry,[action, id],  function (error, results, fields) {
                    if (error) throw error;
                    
                });
                if(action !== 1){                         
                    console.log('[BACKEND] Created event: ' + days[5][i-6]);                     
                }else{                         
                    console.log('[BACKEND] Deleted event: ' + days[5][i-6]);                     
                }
            }
            break;
        case 6:
            for (i = start; i < end; i++){
                qry = "UPDATE Schedule SET "+days[6][i-6]+"=? WHERE id_user=?";
                connection.query(qry,[action, id],  function (error, results, fields) {
                    if (error) throw error;
                    
                });
                if(action !== 1){                         
                    console.log('[BACKEND] Created event: ' + days[6][i-6]);                     
                }else{                         
                    console.log('[BACKEND] Deleted event: ' + days[6][i-6]);                     
                }
            }
            break;
        default:
            break;
    }

}
//Update Schedule
app.post('/updateSchedule', function (req, res){
    var start = req.body.start;
    var end = req.body.end;
    var day = req.body.day;
    var id = req.body.id;
    var action = req.body.action;


    

    switch(day){
        case 0:
            for (i = start; i < end; i++){
                qry = "UPDATE Schedule SET "+days[0][i-6]+"=? WHERE id_user=?";
                connection.query(qry,[action, id],  function (error, results, fields) {
                    if (error) throw error;
                    
                });
                if(action !== 1){
                    console.log('[BACKEND] Created event: ' + days[0][i-6]);
                }else{
                    console.log('[BACKEND] Deleted event: ' + days[0][i-6]);
                }
            }
            break;
        case 1:
            for (i = start; i < end; i++){
                qry = "UPDATE Schedule SET "+days[1][i-6]+"=? WHERE id_user=?";
                connection.query(qry,[action, id],  function (error, results, fields) {
                    if (error) throw error;
                    
                });
                if(action !== 1){                         
                    console.log('[BACKEND] Created event: ' + days[1][i-6]);                     
                }else{
                    console.log('[BACKEND] Deleted event: ' + days[1][i-6]);                     
                }
            }
            break;
        case 2:
            for (i = start; i < end; i++){
                qry = "UPDATE Schedule SET "+days[2][i-6]+"=? WHERE id_user=?";
                connection.query(qry,[action, id],  function (error, results, fields) {
                    if (error) throw error;
                    
                });
                if(action !== 1){                         
                    console.log('[BACKEND] Created event: ' + days[2][i-6]);                     
                }else{                         
                    console.log('[BACKEND] Deleted event: ' + days[2][i-6]);                     
                }
            }
            break;
        case 3:
            for (i = start; i < end; i++){
                qry = "UPDATE Schedule SET "+days[3][i-6]+"=? WHERE id_user=?";
                connection.query(qry,[action, id],  function (error, results, fields) {
                    if (error) throw error;
                    
                });
                if(action !== 1){                         
                    console.log('[BACKEND] Created event: ' + days[3][i-6]);                     
                }else{                         
                    console.log('[BACKEND] Deleted event: ' + days[3][i-6]);                     
                }
            }
            break;
        case 4:
            for (i = start; i < end; i++){
                qry = "UPDATE Schedule SET "+days[4][i-6]+"=? WHERE id_user=?";
                connection.query(qry,[action, id],  function (error, results, fields) {
                    if (error) throw error;
                    
                });
                if(action !== 1){                         
                    console.log('[BACKEND] Created event: ' + days[4][i-6]);                     
                }else{                         
                    console.log('[BACKEND] Deleted event: ' + days[4][i-6]);                     
                }
            }
            break;
        case 5:
            for (i = start; i < end; i++){
                qry = "UPDATE Schedule SET "+days[5][i-6]+"=? WHERE id_user=?";
                connection.query(qry,[action, id],  function (error, results, fields) {
                    if (error) throw error;
                    
                });
                if(action !== 1){                         
                    console.log('[BACKEND] Created event: ' + days[5][i-6]);                     
                }else{                         
                    console.log('[BACKEND] Deleted event: ' + days[5][i-6]);                     
                }
            }
            break;
        case 6:
            for (i = start; i < end; i++){
                qry = "UPDATE Schedule SET "+days[6][i-6]+"=? WHERE id_user=?";
                connection.query(qry,[action, id],  function (error, results, fields) {
                    if (error) throw error;
                    
                });
                if(action !== 1){                         
                    console.log('[BACKEND] Created event: ' + days[6][i-6]);                     
                }else{                         
                    console.log('[BACKEND] Deleted event: ' + days[6][i-6]);                     
                }
            }
            break;
        default:
            break;
    }
    
});

// acha os horarios pro front

app.post('/findSchedule', function (req, res){
    var id = req.body.id;
    events = [[],[],[],[],[],[]]

    connection.query("SELECT * FROM Schedule WHERE  id_user=?",[id],  function (error, results, fields) {
        if (error) throw error;
        var data = JSON.stringify(results);
        var json = JSON.parse(data);
        var days = json[0];
        res.json(days);

    });

});

function getId(user) {
    var idMembro = null;
    
    connection.query("SELECT id FROM User WHERE name=?",[user], function (error, results, fields) {
        if (error) callback(error,null); 
        else{
            setID(results);
            
            
        }  
            
    });

    function setID(valor){
        var data = JSON.stringify(valor);
        var json = JSON.parse(data);
        idMembro = json[0]['id'];
        listQuery.push(idMembro);
        countQuery++;
        connection.query("SELECT * FROM Schedule WHERE id_user=?",[idMembro], function(error, results, fields){
            var data = JSON.stringify(results);
            var json = JSON.parse(data);
            teamSchedules.push(json[0]);
            countSchedules++;
            if(countQuery === numberMembers && countSchedules === numberMembers){
                var qry = makeQueryString();
                connection.query(qry,listQuery, function (error, results, fields) {
                    if (error) throw error;   
                }); 
                var reunion = findSpareTime();
                if(reunion.length>0){

                    var day = reunion[0][0]+reunion[0][1]+reunion[0][2];
                    var translateList = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
                    for(var i=0; i<7;i++){
                        if(day === translateList[i]){
                            day = i;
                        }
                    }
                    for (r=0; r<reunion.length; r++){
                        var part = reunion[r];
                        
                        if(part[part.length-2] === "_"){
                            var start = part[part.length-1];
                        }else{
                            var start = part.substring(part.length-2,part.length);
                        }
                        start = parseInt(start);
                        var end = start + 1;
                        for(i = 1; i<numberMembers+1; i++){
                            updateSchedule(start, end, day, listQuery[i], 2);
                        }
                    }

                }else{
                    console.log("NÃO TEM HORÁRIO LIVRE PARA ESSE TAMANHO DE REUNIÃO");
                }
            }
        });
    }
    return idMembro;
    
}

function findSpareTime(){ // retorna o 1o horario livre de todos
    var spareTime = [];
    var firstMember = teamSchedules[0];
    var isSpare = true;
    var spare = []

    // console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
    // console.log(teamSchedules);

    for(var i = 0; i<7; i++){
        for(var j = 0; j<18; j++){
            if(firstMember[days[i][j]] ===  1){
                isSpare = true;
                spare = [days[i][j]];
                if(j <= 18-duration){
                    for(var k = j+1; k<j+duration; k++){
                        spare.push(days[i][k]);
                        if(firstMember[days[i][k]] !== 1){
                            isSpare = false;
                        }
                    }
                    if(isSpare){
                        spareTime.push(spare);
                    }
                }
            }
        }
    }

    // console.log("CRUD 466: (só do 1o)");
    // console.log(spareTime);

    for(var m = 1; m< numberMembers; m++){ // Todos os membros a partir do 2o
        var schedule = teamSchedules[m];
        for(j=0; j<spareTime.length; j++){
            spare = spareTime[j];
            isSpare = true;
            for(k=0; k<spare.length; k++){
                if(schedule[spare[k]] !== 1){
                    isSpare = false;
                }
            }
            if(isSpare === false){
                spareTime.splice(j,1);
                j--;
            }
        }
    }

    // console.log("CRUD 486: ");
    // console.log(spareTime);


    return spareTime[0];
}

function makeQueryString(){

    var query = "INSERT INTO Team (title, "
    var query2 = "values(?, ";

    for (var i=1; i<numberMembers+1; i++){
        if(i == numberMembers){
            query += ("id_user" + String(i) + ") ");
            query2 += "?)"
        }
        else{
            query += ("id_user" + String(i) + ", ");
            query2 += "?, "
        }  
    }

    query = query + query2;

    return query;

}

function sendEmail(name){

    //console.log("ENTREI AQUI!");
    
    connection.query("SELECT email FROM User WHERE name=?",[name], function (error, results, fields) {
        if (error) callback(error,null); 
        else{

            var jorge = JSON.stringify(results);
            var json = JSON.parse(jorge);
            email = json[0]['email'];
            
            var data = {
                from: 'MrMeetings <me@samples.mailgun.org>',
                to: email,
                subject: name + ', você foi inserido em uma reunião!',
                text: 'Você foi inserido na reunião: "' + meetingName + '", entre no MrMeetings para ver o horário dela!'
                };
                
                mailgun.messages().send(data, function (error, body) {
                console.log(body);
                });
            
        }  
            
    });

}

// CRIA GRUPO
app.post('/registerGroup', function (req, res) {

        countQuery = 0;
        countSchedules = 0;

        meetingName = req.body.title;
        var members = req.body.members;
        numberMembers = req.body.numberMembers;
        listQuery =[meetingName];
        members = JSON.stringify(members);
        members = JSON.parse(members);
        duration = req.body.duration;
        teamSchedules = [];
        
        
        
        for(var i = 1; i< numberMembers + 1; i++){
            getId(members['member' + String(i)]);
            sendEmail(members['member' + String(i)]);
        }


        

 
    
    });
