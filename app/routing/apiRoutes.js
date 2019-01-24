var express = require("express")
var friends = require("../data/friends.js")
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

//find my friend

router.post("/choosenfriend" ,  function(req, res){
 
    let myvals = req.body 


    for (let i = 0; i < friends.length; i++) {
       // var chosen = []

    let EachfriendTotal = 0;
 
 
 
    for (let j = 0; j < friends[i].scores.length; j++) {
        // console.log(friends[i].scores[j]);
        console.log("my val:" + myvals[j]);
        console.log("friend val:" + friends[i].scores[j]);

        let EachfreindTotal += Math.abs(myvals[j] - friends[i].scores[j])

        // EachfriendTotal += 2

         }  
  console.log(friends[i].name) 
         console.log(EachfriendTotal);
    }


let mathFriends = [] 

// split difference array into small arrays
// each array is a friend
// add each friend array
// array that is the smallest number is your chosenFriend
// res.send(chosenFriend)

 
    console.log("found")
    res.send("Matched")
}) 



module.exports=router