const express =require('express')

const app =express()
const database =require('./database')
const cors = require('cors')
app.use(cors())
app.use(express.json());
app.get('/todos',async(req,res)=>{
    const allTodos=await database.execute('SELECT * FROM todos')
    console.log('hi');
    res.setHeader('Content-Type', 'application/json');
    res.json(allTodos[0])
    
})
app.listen(5000)