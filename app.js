//dependencias
const express =require('express')




//rutas
const inicio=require('./src/routes/home/inicio.routes')


//app
const app=express()
const port=3000


app.use(inicio);




app.listen(port,()=>{
  console.log(`Example app listening on port ${port}`)
})