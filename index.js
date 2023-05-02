// This is where all the needed packages will be for this application 
const inquirer = require("inquirer");
const fs = require("fs");

const { Triangle, Square, Circle } = require("./lib/shapes");



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


  
// the function to initialize the app will be here 
function init() {
    inquirer.prompt(questions).then((data) => {
        if (data.text.length > 3) {
            console.log("Must enter a value of no more than 3 characters");
        // fs.writeFile("logo.svg", generateShapes(data));
        console.log(data);
    } else {
        // Calling write file function to generate SVG file
        writeToFile("logo.svg", data);
    
        }
    //   console.log('file successfully written')
    });
  };

init();