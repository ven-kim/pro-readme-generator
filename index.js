const generatePage = require("./src/readme-template.js");
const { writeFile } = require("./utils/generateMarkdown.js");
const { promptUser, promptReadMe } = require("./src/questions.js")

promptUser()
  .then(promptReadMe)
  .then(readMeData => {
    return generatePage(readMeData);
  })
  .then(addContentToPage => {
    return writeFile(addContentToPage);
  })
  .catch((err) => {
    console.log(err);
  });


// Commented out and refactored initial starter code due to ESM errors

// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();