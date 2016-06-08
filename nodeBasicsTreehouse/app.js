var https = require("https");
var username = "jorgeacosta2";

function printMessage(username,badgeCount,points){
   var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript" ;
    console.log(message);
}

//Connect to API URL
var req = https.get("https://teamtreehouse.com/" + username + ".json", function(res){
    console.log(res.statusCode);
});

//Handle a error on req
req.on("error",function(e){
  console.error(e.message);
});