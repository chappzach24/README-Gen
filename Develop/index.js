// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  { name: "title", message: "What is your title?" },
  {
    name: "favFood",
    message: "What is your favorite food?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  let output = generateMarkdown(data);

  fs.writeFile(fileName, output, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
}

// TODO: Create a function to initialize app
function init(question_array) {
  inquirer
    .prompt(question_array)
    .then((answers) => {
      // writeToFile("README_2.md", answers);
      console.log(answers.favFood);
      let data = answers;
      writeToFile("README2.md", data);
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}
// Function call to initialize app
init(questions);
