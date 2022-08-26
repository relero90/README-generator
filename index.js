// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  "What is the title of your project? ",
  "Describe the project. What does it do? Why is it useful? ",
  "Installation instructions: ",
  "Usage instructions: ",
  "Which license is your project using? ",
  "Credits: ",
  "Contribution guidelines: ",
  "Testing instructions: ",
  "What is your GitHub username?",
  "What is your email address?",
];
//description, installation instructions, usage information, contribution guidelines, and test instructions

// TODO: Create a function to write README file
// fileName as a variable? Is it going to change?
function writeToREADME(data) {
  inquirer
    .prompt([
      {
        type: "input",
        message: questions[0],
        name: "title",
      },
      {
        type: "input",
        message: questions[1],
        name: "description",
      },
      {
        type: "input",
        message: questions[2],
        name: "installation",
      },
      {
        type: "input",
        message: questions[3],
        name: "usage",
      },
      {
        type: "list",
        message: questions[4],
        choices: [
          "Apache License 2.0",
          "GNU GPL v3",
          "MIT",
          "ISC",
          "None of the above",
        ],
        name: "license",
      },
      {
        type: "input",
        message: questions[5],
        name: "credits",
      },
      {
        type: "input",
        message: questions[6],
        name: "tocontribute",
      },
      {
        type: "input",
        message: questions[7],
        name: "testing",
      },
      {
        type: "input",
        message: questions[8],
        name: "github",
      },
      {
        type: "input",
        message: questions[9],
        name: "email",
      },
    ])
    .then((data) => {
      let markdownPull = generateMarkdown(data);
      console.log(markdownPull);
      fs.writeFile("./file-output/README.md", markdownPull, (error) =>
        error ? console.error(error) : console.log("Success!")
      );
    });
}

// TODO: Create a function to initialize app
function init() {
  if (process.argv[2] === "go") {
    writeToREADME();
  }
}

// Function call to initialize app
init();
