// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [];

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Describe the project. What does it do? Why is it useful?",
      name: "description",
    },
    {
      type: "input",
      message: "How can a user install your project?",
      name: "installation",
    },
    {
      type: "input",
      message: "How can this project be used?",
      name: "usage",
    },
    {
      type: "list",
      message: "Which license is your project covered under?",
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
      message: "What additional credits need to be provided?",
      name: "credits",
    },
    {
      type: "input",
      message: "How can others contribute to this project?",
      name: "tocontribute",
    },
    {
      type: "input",
      message: "How can this project be tested?",
      name: "testing",
    },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "github",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
    {
      type: "input",
      message: "How can you be reached for further questions?",
      name: "tocontact",
    },
  ])
  .then((data) =>
    fs.writeFile("./README-output/README.md", writeToREADME(data), (error) =>
      error ? console.error(err) : console.log("Success!")
    )
  );

// TODO: Create a function to write README file
function writeToREADME(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
