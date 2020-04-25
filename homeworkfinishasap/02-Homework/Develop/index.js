const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");
const util = require("util");


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
    const filename = data.username.toLowerCase().split("").join("") + ".md";
    // the null, 2 are options you pass to the argument, and the 2 gives it two spaces to work with
    asyncWrite = util.promisify(fs.writeFile);
    asyncWrite(filename, JSON.stringify(data, null, 2), function(err){
        if(err){
            console.log(err);
        }
        console.log("success!");
        
    })
    
  })
  .then(function(badge, username) {
    var queryURL = `https://api.github.com/users/${username}`;
    return axios
    .get(queryURL)
    .then(function (res){
      const badge = res.data.avatar_url;
      const username = res.data.login;
      return [badge, username];
    })
  })
  
