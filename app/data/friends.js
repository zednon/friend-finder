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
        1,
        2,
        4,
        2,
        1,
        3,
        4,
        2,
        2,
        1
            ]
        }, 
        {
            "name":"valk",
            "photo": "/app/photo1.jpg",
            "scores" : [
            2,
            2,
            3,
            2,
            4,
            3,
            1,
            2,
            3,
            1
                ]
            }

]

var difference = []


console.log("friends scores calculated against my scores:" + difference);
module.exports=user

