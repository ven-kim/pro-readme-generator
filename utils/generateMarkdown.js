const fs = require('fs');

const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/userreadme.md', fileContent, err => {
      // Reject the Promise if there is an error and send the error to the Promise's `.catch()` method
      if (err) {
        reject(err);
        // Exit out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
        return;
      }
      // If it functions well, resolve the Promise and send the successful data to the `.then()` method
      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
};

module.exports =  {writeFile} ;

// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}
// `;
// }

// module.exports = generateMarkdown;