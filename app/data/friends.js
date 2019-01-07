// You should save your application's data inside of app/data/friends.js as an array of objects. Each of these objects should roughly follow the format below.

let user = [
    {
    "name":"Ahmed",
    "photo": "/app/photo1.jpg",
    "scores" : [
    5,
    1,
    4,
    4,
    5,
    1,
    2,
    5,
    4,
    1
        ]
    } ,
    {
        "name":"Tom",
        "photo": "/app/photo1.jpg",
        "scores" : [
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
            ]
        }


]

var difference = []


function FrindMath(){

    for (let i = 0; i < friends.length; i++) {
    for (let j = 0; j < friends[i].scores.length; j++) {
        // console.log(friends[i].scores[j]);
        console.log("my val:" + myvals[j]);
        console.log("friend val:" + friends[i].scores[j]);

        difference.push(Math.abs(myvals[j] - friends[i].scores[j]))
    }  
}
}


let mathFriends = [] 

// split difference array into small arrays
// each array is a friend
// add each friend array
// array that is the smallest number is your chosenFriend
// res.send(chosenFriend)

console.log("friends scores calculated against my scores:" + difference);
module.exports=user

