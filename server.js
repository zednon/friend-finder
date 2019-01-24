var express = require("express")
var app = express()
app.use(express.json())
app.use(express.urlencoded({
  extended:true  
}))

var htmlroutes = require("./app/routing/htmlRoutes.js")
app.use(htmlroutes)

var apiroutes = require("./app/routing/apiRoutes.js")
app.use(apiroutes)

app.listen(process.env.PORT||3000)

