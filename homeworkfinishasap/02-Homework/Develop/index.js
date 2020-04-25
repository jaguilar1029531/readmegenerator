var fs = require("fs");
var inquirer = require("inquirer");
var axios = require("axios");
var util = require("util");


inquirer.prompt([
    {
        // what is yo name
      type: "input",
      message: "What is your github username?",
      name: "username"
    }
  ])
  // now this function will be called once the input value is in
  .then(function(data) {

    // writefile takes filename, item you wanna add, then a callback
    //use activity 6 to help
    // this makes all lowercase and takes spaces out, a
    const {username} = data;
    const card = `${username}`;
    return card
  })
  .then(function({username}) {
    var queryURL = `https://api.github.com/users/${username}`;
    return axios
    .get(queryURL)
    .then(function (res){
      var badge = res.data.avatar_url;
      var username = res.data.login;
      return [badge, username];
    })
  })
  .then(function(html) {
    // the null, 2 are options you pass to the argument, and the 2 gives it two spaces to work with
    var asyncWrite = util.promisify(fs.writeFile);
    asyncWrite("README.md", html, function(err){
        if(err){
            console.log(err);
        }
        console.log("success!");
    })
  })
 


function init() {

}

init();
