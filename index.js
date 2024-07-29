const express = require('express')
const app = express()
const PORT = 4000

app.use('/',(req,res)=>{
    res.send('yeah buddyyy light weight')
})

app.listen(PORT,()=>console.log('server online'))

