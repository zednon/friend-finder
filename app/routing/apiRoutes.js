var express = require("express")
var freinds = require("../data/friends.js")
var router = express.Router()



//read route 
//which is GET 
router.get("/api/friends" , function(req, res){
    res.json(freinds)
})

//creat route 
//which is POST 
router.post("/newfriend" , function(req, res){
    console.log(req.body)
    res.send("postworks")
})


module.exports=router