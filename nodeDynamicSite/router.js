var Profile = require("./profile.js");

function homeRoute(req,res){
    if (req.url === "/"){
    //Show search
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.write("Header\n");
    res.write("Search\n");
    res.end("Footer\n");
    }
}

function userRoute(req,res){
    var username = req.url.replace("/","");
    if(username.length > 0){
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.write("Header\n");
        
    var studentProfile = new Profile(username);
    studentProfile.on("end", function(profileJSON){
        var values = {
            avatarUrl: profileJSON.gravatar_url,
            username: profileJSON.profile_name,
            badges: profileJSON.badges.length,
            javascriptPoints: profileJSON.points.JavaScript
        };
        res.write(values.username + " has " + values.badges + " badges\n");
        res.end("Footer\n");
            }).on("error",function(e){
            res.write(e.message + "\n");
            res.end("Footer\n");
        });
    }
}


module.exports.home = homeRoute;
module.exports.user = userRoute;