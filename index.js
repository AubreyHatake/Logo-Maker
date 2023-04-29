// This is where all the needed packages will be for this application 
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateLogo = require("./generateLogo");
const shapes = require("./library/shapes");


const questions = [
    {
       type: "input",
       name: "Logo",
       message: "What is the title of your logo?"
    },
    {
        type: "list",
        message: "What color would you like the background?",
        choices: [
            "Purple",
            "Black",
            "Blue",
            "Green",
            "White"
        ],
        name: "backgroundColor"
    },
    {
        type: "list",
        message: "What color would you like the words?",
        choices: [
            "Blue",
            "Yellow",
            "Black",
            "Green",
            "Purple",
            "White"
        ],
        name: "fontColor"
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
]

// the function to write the file (which needs to be a svg file) will be written here, fs will be used in this function 
// function writeToFile(fileName, data) {
//     fs.writeFileSync(path.join(process.cwd(), fileName), data);
//   }

  
// the function to initialize the app will be here 
function init() {
    inquirer.prompt(questions).then((data) => {
        // fs.writeFile("logo.svg", (data));
        console.log("swag");
    
     
    //   console.log('file successfully written')
    });
  };

init();