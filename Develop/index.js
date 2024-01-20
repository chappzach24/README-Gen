// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    message: "Name of Project: ",
    name: "name",
  },

  {
    type: "input",
    message: "Please enter a description of your project: ",
    name: "descriptionProject",
  },

  {
    type: "input",
    message: "How would you install this project: ",
    name: "descriptionInstallation",
  },

  {
    type: "input",
    message: "How would someone use this poroject: ",
    name: "usage",
  },

  {
    type: "list",
    choices: ["MIT", "Apache2.0", "BSD", "BSD2.0", "GNU", "ISC", "Unlicensed"],
    message: "What type of license does this project need",
    name: "license",
  },

  {
    type: "input",
    message: "Please list any contributors: ",
    name: "contributors",
  },

  {
    type: "input",
    message: "How would someone test this app: ",
    name: "test",
  },

  {
    type: "input",
    message: "Enter your GitHub user name: ",
    name: "username",
  },

  {
    type: "input",
    message: "Enter your email: ",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log(typeof data.license);
    console.log("The file has been saved!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    writeToFile("README.md", generateMarkdown(response));
  });
}
// Function call to initialize app
init();
