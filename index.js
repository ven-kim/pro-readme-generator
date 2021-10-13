const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const licenseLookup = require('./utils/licenseLookup');

const questions = [
  {
    type: 'input',
    message: 'Enter the Name of your project: ',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Enter a Description of your project: ',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Enter the Installation Instructions for your project: ',
    name: 'install',
  },
  {
    type: 'input',
    message: 'Enter the Usage Instructions of your project: ',
    name: 'usage',
  },
  {
    type: 'list',
    message: 'Select a license: ',
    name: 'licenseLookup',
  },
  {
    type: 'input',
    message: 'Enter any Contribution Guidelines in your project: ',
    name: 'contribution',
  },
  {
    type: 'input',
    message: 'Enter the Test Instructions for your project: ',
    name: 'test',
  },
  {
    type: 'input',
    message: 'Enter your GitHub username: ',
    name: 'username',
  },
  {
    type: 'input',
    message: 'Enter your email address: ',
    name: 'email',
  },
];

// Function 'writeFile' to write 'generateMarkdown' to a README file
function writeFile (fileName, data) {
  fs.writeFile(fileName, generateMarkdown.generateMarkdown(data), (err) =>
  err ? console.error(err) : console.log('Success!'))
}

function start() {
  
  inquirer
    .prompt(questions)

    .then((answers) => {

      writeFile('./test/your-READme.md', answers);
    })
}

start();