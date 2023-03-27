const express = require("express")
const { postModule } = require("../Module/postModule")
const postRoute = express.Router()


//This will show the posts of logged in users.
postRoute.get("/",async(req,res)=>{
try {
    let {user}=req.body
    let post = await postModule.find({user})
    res.send(post)
} catch (error) {
    res.send(error.massage)
}
})
//addd post
postRoute.post("/add",async(req,res)=>{
    let payload = req.body
    try {
        let newpost =  new postModule(payload)
        await newpost.save()
res.send({"msg":"added"})
    } catch (error) {
        res.send(error.massage)
    }
})

//posts/top ==> This will show the post details that has maximum number of comments for the user who has logged in.

postRoute.get("/top",async(req,res)=>{
    try {
        let post = await postModule.find({})
    const max = 0;
    const top="jhg"
   for(i=0;i<post.length;i++){
   if(max<post[i].no_if_comments>max){
    max=post[i].no_if_comments
  top=post[i]
   }
   }
    
res.send(top)


    } catch (error) {
        res.send(error.massage)
    }
})

//update post
postRoute.patch("/update/:id",async(req,res)=>{
let id = req.params.id
let payload = req.body
try {
    
let update =await postModule.findByIdAndUpdate({_id:id},payload)
res.send("update")

} catch (error) {
 
}
})

//delete post

postRoute.delete("/delete/:id",async(req,res)=>{
    let id=req.params.id
try {
    let post = await postModule.findOneAndDelete({_id:id}) 
    res.send("delete")
} catch (error) {
    res.send(error.massage)      
}
    
})


module.exports={
    postRoute
}