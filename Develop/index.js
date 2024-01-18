// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  "Name of Project: ",
  "Enter Description of project: ",
  "Enter description of Installation: ",
  "Enter description of Usage section: ",
  "Enter description of License section: ",
  "Enter names of Contributing: ",
  "Enter information of Testing in this project: ",
  "Enter your Github username: ",
  "Enter your email: ",
];

// TODO: Create a function to write README file
function writeToFile(data) {
  let output = generateMarkdown(data);

  fs.writeFile(fileName, output, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
}

// TODO: Create a function to initialize app
function init(question_array) {
  inquirer.prompt([
    {
      type: "input",
      message: questions[0],
      name: "name",
    },

    {
      type: "input",
      message: questions[1],
      name: "descriptionProject",
    },

    {
      type: "input",
      message: questions[2],
      name: "descriptionInstallation",
    },

    {
      type: "input",
      message: questions[3],
      name: "descriptionInstallation",
    },

    {
      type: "list",
      choices: ["test", "test2", "test3"],
      message: questions[4],
      name: "license",
    },

    {
      type: "input",
      message: questions[5],
      name: "contributors",
    },

    {
      type: "input",
      message: questions[6],
      name: "test",
    },

    {
      type: "input",
      message: questions[7],
      name: "username",
    },

    {
      type: "input",
      message: questions[8],
      name: "email",
    },
  ]);
}
// Function call to initialize app
init(questions);
