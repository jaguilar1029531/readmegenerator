var fs = require("fs");
const questions = "Title Description Table of Contents Installation Usage License Contributing Tests Questions";

fs.writeFile("README.md", questions, function(err) {

    if (err) {
      return console.log(err);
    }
  
    console.log("Success!");
  
  });

function init() {

}

init();
