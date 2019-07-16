const { Pool } = require("pg");
require('dotenv').config();
const db_url = process.env.DATABASE_URL;
const pool = new Pool({connectionString: db_url});
require('util');

function getNotes(callback){
    var sql = "SELECT exercise FROM workout"
    pool.query(sql, function(error, db_info){
        if(error){
            console.log("Error in query keyboard: ")
			console.log(error);
			callback(error, null);
        } 
        else {
            var result = {
                    success:true,
                    list:db_info.rows
            }
            console.log("keyboard DB result: "+ JSON.stringify(db_info.rows))
            callback(null, result);
        }
    })
}