const express = require("express")
const userRoutes = express.Router()
const {userModule} = require("../Module/userModule")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');
//post user data here.......(registeration)
userRoutes.post("/register",async(req,res)=>{
const {name,email,gender,password,age,city} = req.body
try {
    const user = await userModule.find({email})
    if(user.length>0){
        res.send({"msg":"User already exist, please login"})
    }else{
        bcrypt.hash(password, 5, async function(err, hash) {
            // Store hash in your password DB.
        if(err){
            res.send({"error":err.message}) 
        }else{
            const newuser = new userModule({name,email,gender,password:hash,age,city})
              await newuser.save()
              res.send({"msg":"new user has been register done..."})
        }
        
        })
    }
} catch (error) {
    res.send({"error":error.massage})
}
})


//login.........
userRoutes.post("/login",async(req,res)=>{
    try{
        const {email,password}= req.body

const user = await userModule.find({email})

if(user.length>0){
    bcrypt.compare(password, user[0].password, function(err, result) {
        if(result){
        const token = jwt.sign({ userID: user[0]._id }, 'masai');
        res.send({"msg":"Login Successfull","token":token})
        } 
        else {res.send({"msg":"Wrong creadiancial"})}
        });
}
else{
    res.send({"msg":"user not found"})
}

    }catch(err){
        res.send({"error":err.message})
    }
})



module.exports ={
    userRoutes
}


