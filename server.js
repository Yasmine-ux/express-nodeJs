const express = require('express')

const app =express()

app.use(express.static(__dirname+'/public'))

app.listen(3000, (err)=> {
   if (err) console.log('Server is not running')
   else console.log('server is running on port 3000')
})