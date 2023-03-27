const mongoose = require("mongoose")

const useSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    gender:{type:String,required:true},
    password:{type:String,required:true},
    age:{type:Number,required:true},
    city:{type:String,required:true}
})

const userModule = mongoose.model("user",useSchema)

module.exports={
userModule    
}