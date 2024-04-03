var mysql=require('mysql');
var connection=mysql.createPool({

host:'mysql34.mysql.database.azure.com',
user:'sqladmin',
password:'Password@12345',
database:'techm'

});


module.exports=connection;