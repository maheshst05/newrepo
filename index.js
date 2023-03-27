const express = require("express")
const app = express()
app.use(express.json())
const {connection}=require("./db")
const{userRoutes} = require("./Routes/userRoutes")
const{postRoute}= require("./Routes/postRoutes")
const{authentication}=require("./middleware/aunthentication")
const cors = require("cors")
app.use(cors())
app.use("/user",userRoutes)

app.use(authentication)
app.use("/post",postRoute)




app.listen(9090,async()=>{
    await connection
    console.log("connnect to the DB.")
console.log("server is running..")
})