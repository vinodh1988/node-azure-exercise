var connection=require("./connection");

var operations={

   all:function(callback){
          connection.query("select * from people",callback);
    }
}

module.exports = operations;