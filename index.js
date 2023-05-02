// This is where all the needed packages will be for this application 
const inquirer = require("inquirer");
const fs = require("fs");
// this is where I will import
const { Triangle, Square, Circle } = require("./library/shapes");


// Function writes the SVG file using user data from inquirer prompts
function writeToFile(fileName, data) {
    // File starts as an empty string
    let svgString = "";
    // Sets width and height of logo container
    svgString =
      '<svg version="1.1" width="300" height="200" xmlns="https://www.w3.org/TR/SVG2/">';
    // <g> tag wraps <text> tag so that user font input layers on top of polygon -> not behind
    svgString += "<g>";
    // Takes user input for shape choice and put it into SVG file
    svgString += `${data.shape}`;
  
    // Conditional check takes users input from choices array this will add different properties and shape color 
    let shapeChoice;
    if (data.shape === "Triangle") {
      shapeChoice = new Triangle();
      svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${data.backgroundColor}"/>`;
    } else if (data.shape === "Square") {
      shapeChoice = new Square();
      svgString += `<rect x="73" y="40" width="160" height="160" fill="${data.backgroundColor}"/>`;
    } else {
      shapeChoice = new Circle();
      svgString += `<circle cx="150" cy="115" r="80" fill="${data.backgroundColor}"/>`;
    }
  
    // the text tag will give the text a tag, text-anchor centers the text, font-size will give the users data a font size of 40 as default.
    svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${data.textColor}">${data.text}</text>`;
    // Closing </g> tag
    svgString += "</g>";
    // Closing </svg> tag
    svgString += "</svg>";
  
    // this line takes in the user data and creates an SVG file, this line will also catch any errors, if there are no errors you will see a success message in he console
    fs.writeFile(fileName, svgString, (err) => {
      err ? console.log(err) : console.log("logo.svg file successfully created");
    });
  }

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
        name: "shape"
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