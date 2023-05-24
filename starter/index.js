const fs = require('fs');
const path = require('path');

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
}

// Function to initialize program
async function init() {
  const { default: inquirer } = await import('inquirer');
  const generateMarkdown = require('./utils/generateMarkdown');