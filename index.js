// This is where all the needed packages will be for this application 
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
// const generateLogo = require("./generateLogo");
 const shapes = require("./library/shapes.js");


const questions = [
    {
        type: "input",
        message:
          "What text would you like you logo to display? (Enter up to three characters)",
        name: "text",
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
        type: "input",
        message:
          "Choose text color (Enter color keyword OR a hexadecimal number)",
        name: "textColor",
    },
    {
        type: "list",
        message: "Choose a shape",
        choices: [
            "Circle",
            "Triangle",
            "Square"
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
        // fs.writeFile("logo.svg", generateShapes(data));
        console.log(data);
    
     
    //   console.log('file successfully written')
    });
  };

init();