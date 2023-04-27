// This is where all the needed packages will be for this application 
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");


inquirer
.propmt = ([
    {
       type: "input",
       name: "Logo",
       message: "What is the title of your logo?"
    },
    {
        type: "input",
        name: "backgroundColor",
        message: "What color would you like the background?"
    },
    {
        type: "input",
        name: "fontColor",
        message: "What color would you like the words?"
    },
    {
        type: "list",
        message: "Choose a shape",
        choices: [
            "Circle",
            "Triangle",
            "Square",
            "None"
        ],  
        name: "shapes"
    }
]);

// the function to write the file (which needs to be a svg file) will be written here, fs will be used in this function 




// the function to initialize the app will be here 
// function init() {
//     inquirer.prompt(questions);
// }

// init();