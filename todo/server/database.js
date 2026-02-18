const mysql =require('mysql2')

const database =mysql.createPool({
    host:'localhost',
    user:'root',
    database:'todo',
    password:'2880Hh2880'
})
module.exports =database.promise()