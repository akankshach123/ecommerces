const mysql=require('mysql');


let connection=mysql.createConnection({

    host:'localhost',
    user:'root',
    password:'',
    database:'shopping'
})

connection.connect((err)=>{
    err?console.log(err.message):console.log('connection established');

})


module.exports=connection;