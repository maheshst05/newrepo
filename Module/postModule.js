const mongoose = require("mongoose")

const PostSchema = mongoose.Schema({
    title:{type:String,required:true},
    body:{type:String,required:true},
    device:{type:String,required:true},
    no_if_comments:{type:Number,require:true},
    user:{type:String,require:true}
})

const postModule = mongoose.model("post",PostSchema)
module.exports={
postModule
}