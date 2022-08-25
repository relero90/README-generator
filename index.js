// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  "What is the title of your project?",
  "Describe the project. What does it do? Why is it useful?",
  "How can a user install your project?",
  "How can this project be used?",
  "Under which license is your project covered?",
  "What additional credits need to be provided?",
  "How can others contribute to this project?",
  "How can this project be tested?",
  "What is your GitHub username?",
  "What is your email address?",
  "How can you be reached for further questions?",
];

// TODO: Create a function to write README file
// fileName as a variable? Is it going to change?
function writeToREADME(fileName, data) {
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
          "APM",
          "AUR",
          "Bower",
          "Cocoapods",
          "Conda",
          "CPAN",
          "CRAN/METACRAN",
          "Crates.io",
          "CTAN",
          "DUB",
          "Eclipse Marketplace",
          "GitHub",
          "GitLab",
          "GitLab (self-managed)",
          "Greasy Fork",
          "Hex.pm",
          "NPM",
          "Ore",
          "Packagist",
          "Packagist (custom server)",
          "PyPI",
          "REUSE Compliance",
          "Weblate Component",
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
      {
        type: "input",
        message: questions[10],
        name: "tocontact",
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
