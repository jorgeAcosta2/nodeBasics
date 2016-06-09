var https = require("https");
var http = require("http");

function printMessage(username,badgeCount,points){
   var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript" ;
    console.log(message);
}

function printError(e){
  console.error(e.message);   
}
function get(username){
//Connect to API URL
var req = https.get("https://teamtreehouse.com/" + username + ".json", function(res){
    var body = "";
    res.on("data",function(chunk){
        body += chunk;
    }).on("end",function(){
    if(res.statusCode === 200){
    try{
        var profile = JSON.parse(body);
        printMessage(username,profile.badges.length,profile.points.JavaScript);
        }
    catch(e){
        //parse error
        printError(e);
            }
        }else{
            printError({message: "There was an error getting the profile for " + username + ". (" + http.STATUS_CODES[res.statusCode] + ")"});
        }
    });
});

//Handle a error on req
req.on("error", printError);
}


module.exports.get = get;
