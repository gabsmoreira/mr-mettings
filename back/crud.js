
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

var days = [["monday_6","monday_7","monday_8","monday_9","monday_10","monday_11","monday_12","monday_13","monday_14","monday_15","monday_16","monday_17","monday_18","monday_19","monday_20","monday_21","monday_22","monday_23"],
["tuesday_6","tuesday_7","tuesday_8","tuesday_9","tuesday_10","tuesday_11","tuesday_12","tuesday_13","tuesday_14","tuesday_15","tuesday_16","tuesday_17","tuesday_18","tuesday_19","tuesday_20","tuesday_21","tuesday_22","tuesday_23"],
["wednesday_6","wednesday_7","wednesday_8","wednesday_9","wednesday_10","wednesday_11","wednesday_12","wednesday_13","wednesday_14","wednesday_15","wednesday_16","wednesday_17","wednesday_18","wednesday_19","wednesday_20","wednesday_21","wednesday_22","wednesday_23"],
["thursday_6","thursday_7","thursday_8","thursday_9","thursday_10","thursday_11","thursday_12","thursday_13","thursday_14","thursday_15","thursday_16","thursday_17","thursday_18","thursday_19","thursday_20","thursday_21","thursday_22","thursday_23"],
["friday_6","friday_7","friday_8","friday_9","friday_10","friday_11","friday_12","friday_13","friday_14","friday_15","friday_16","friday_17","friday_18","friday_19","friday_20","friday_21","friday_22","friday_23"],
["saturday_6","saturday_7","saturday_8","saturday_9","saturday_10","saturday_11","saturday_12","saturday_13","saturday_14","saturday_15","saturday_16","saturday_17","saturday_18","saturday_19","saturday_20","saturday_21","saturday_22","saturday_23"],
["sunday_6","sunday_7","sunday_8","sunday_9","sunday_10","sunday_11","sunday_12","sunday_13","sunday_14","sunday_15","sunday_16","sunday_17","sunday_18","sunday_19","sunday_20","sunday_21","sunday_22","sunday_23"]  
];


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
   //console.log(req);

    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    var id_user;

    connection.query("INSERT INTO User (name, email, password) values(?,?,?)",[name,email,password], function (error, results, fields) {
        if (error) throw error;   
            
    }); 
    

    connection.query("SELECT id FROM User WHERE name=?",[name], function (error, results, fields) {
        if (error) throw error;   
            //res.json(req.body)
            //console.log(results)
            var data = JSON.stringify(results);
            var json = JSON.parse(data);
            id_user = json[0]['id'];
            //console.log(number);
            res.json(id_user)
            connection.query("INSERT INTO Schedule (id_user) values(?)",[id_user], function (error, results, fields) {
                if (error) throw error;   
            }); 
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
                // localStorage.setItem('id', id_user)
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


//DELETE    

app.post('/delete', function (req, res){
    var user_id = req.body.id
    console.log(user_id)
    connection.query('DELETE FROM User WHERE user_id=?',[user_id],  function (error, results, fields) {
        if (error) throw error;
        res.json(results)
    });
});

////////////////////////////////////////////////////////////////////
function updateSchedule(start, end, day, id, action){

    switch(day){
        case 0:
            for (i = start; i < end; i++){
                //console.log(days[0][i-6]);
                qry = "UPDATE Schedule SET "+days[0][i-6]+"=? WHERE id_user=?";
                connection.query(qry,[action, id],  function (error, results, fields) {
                    if (error) throw error;
                    
                    //res.json(results)
                });
                // console.log(i)
                if(action === 0){
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
                    
                    //res.json(results)
                });
                if(action === 0){                         
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
                    
                    //res.json(results)
                });
                if(action === 0){                         
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
                    
                    //res.json(results)
                });
                if(action === 0){                         
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
                    
                    //res.json(results)
                });
                if(action === 0){                         
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
                    
                    //res.json(results)
                });
                if(action === 0){                         
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
                    
                    //res.json(results)
                });
                if(action === 0){                         
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
                //console.log(days[0][i-6]);
                qry = "UPDATE Schedule SET "+days[0][i-6]+"=? WHERE id_user=?";
                connection.query(qry,[action, id],  function (error, results, fields) {
                    if (error) throw error;
                    
                    //res.json(results)
                });
                // console.log(i)
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
                    
                    //res.json(results)
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
                    
                    //res.json(results)
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
                    
                    //res.json(results)
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
                    
                    //res.json(results)
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
                    
                    //res.json(results)
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
                    
                    //res.json(results)
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

    connection.query("SELECT * FROM Schedule WHERE  id_user=?",[id],  function (error, results, fields) {
        if (error) throw error;
        var data = JSON.stringify(results);
        var json = JSON.parse(data);
        var days = json[0];
        //console.log(days);
        res.json(days);

    });

});

function getId(user) {
    var idMembro = null;
    
    connection.query("SELECT id FROM User WHERE name=?",[user], function (error, results, fields) {
        if (error) callback(error,null); 
        else{//res.json(req.body)
            setID(results);
            
            
        }  
            
    });

    function setID(valor){
        var data = JSON.stringify(valor);
        var json = JSON.parse(data);
        //console.log(json[0]);
        idMembro = json[0]['id'];
        listQuery.push(idMembro);
        countQuery++;
        connection.query("SELECT * FROM Schedule WHERE id_user=?",[idMembro], function(error, results, fields){
            //console.log(results);
            var data = JSON.stringify(results);
            var json = JSON.parse(data);
            teamSchedules.push(json[0]);
            countSchedules++;
            if(countQuery === numberMembers && countSchedules === numberMembers){
                var qry = makeQueryString();
                connection.query(qry,listQuery, function (error, results, fields) {
                    if (error) throw error;   
                }); 
                // console.log(teamSchedules);
                // console.log("moday 6: "+teamSchedules[0]['monday_6']);

                var reunion = findSpareTime();
                var day = reunion[0]+reunion[1]+reunion[2];
                var translateList = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
                //console.log(reunion);

                for(var i=0; i<7;i++){
                    if(day === translateList[i]){
                        day = i;
                    }
                }

                if(reunion[reunion.length-2] === "_"){
                    var start = reunion[reunion.length-1];
                }else{
                    var start = reunion.substring(reunion.length-2,reunion.length);
                }

                start = parseInt(start);
                
                
                var end = start + 1;
                
                // console.log("day: " + day);
                // console.log("start: " + start);
                // console.log("end: " + end)

                for(var i = 1; i<numberMembers+1; i++){
                    updateSchedule(start, end, day, listQuery[i], 2);
                }

                
            }
        });
    }
    //console.log("idMembro fora: "+idMembro);
    return idMembro;
    
}

function findSpareTime(){ // retorna o 1o horario livre de todos
    var spareTime = [];

    var firstMember = teamSchedules[0];

    // console.log(teamSchedules);

    for(var i = 0; i<7; i++){
        for(var j = 0; j<18; j++){
            if(firstMember[days[i][j]] ===  1){
                spareTime.push(days[i][j]);
            }
        }
    }

    for(var i = 1; i< numberMembers; i++){ // Todos os membros a partir do 2o
        var schedule = teamSchedules[i];
        // console.log("ANALISANDO O MEMBRO: "+String(i+1));
        for(var j=0; j<spareTime.length; j++){
            // console.log("horario: "+spareTime[j]);
            // console.log("ocupado(0) ou livre(1): "+schedule[spareTime[j]]);
            if(schedule[spareTime[j]] === 0){
                // console.log("TIRAR: "+spareTime[j])
                // console.log("ANTES: "+ spareTime);
                spareTime.splice(j,1);
                // console.log("DEPOIS: "+spareTime);
                j--;
            }
        }
    }

    // console.log("spare: "+spareTime);

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

// CRIA GRUPO
app.post('/registerGroup', function (req, res) {
    //    var data = JSON.parse(req.body);
       //console.log(req);

        countQuery = 0;
        countSchedules = 0;

        var title = req.body.title;
        var members = req.body.members;
        numberMembers = req.body.numberMembers;
        listQuery =[title];
        var members = JSON.stringify(members);
        var members = JSON.parse(members);
        
        // var query ="INSERT INTO Team (title, id_user1, id_user2) values(?, ?, ?)"
        
        
        for(var i = 1; i< numberMembers + 1; i++){
            getId(members['member' + String(i)]);
        }


        
        //console.log(listQuery);

 
    
    });

    // var someVar = [];
    
    // connection.query("select * from ROOMS", function(err, rows){
    //   if(err) {
    //     throw err;
    //   } else {
    //     setValue(rows);
    //   }
    // });
    
    // function setValue(value) {
    //   someVar = value;
    //   console.log(someVar);
    // }