const inquirer = require("inquirer");
const fs = require("fs");
const setShapea = require('./library/pickshape.js')
const fileName = "logo.svg"


const questions = [

    {
        type: "input",
        message: "Enter three numbers or letters you would like for the LOGO:",
        name: "text"
    },
    {
        type: "input",
        message: "What color would you like the text inside to be: ",
        name: "textColor",
      },
    
      {
        type: "list",
        choices: ["Circle", "Triangle", "Square"],
        message: "Select the shape that you would like: ",
        name: "shape",
      },
    
      {
        type: "input",
        message: "What color would you like the logo shape to be: ",
        name: "shapeColor",
      },
    ];

    function createLogo(response, fileName) {
        const svg = setShapea(response);
        fs.writeFile(fileName, svg, () => console.log("Created " + fileName));
      }
      
      function init() {
        inquirer
          .prompt(questions)
          .then((response) => {
            createLogo(response, fileName);
          })
      }
      
      init();