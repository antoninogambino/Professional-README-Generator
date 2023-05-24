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

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: "What is your project's title?",
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a description of your project:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
  },
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
];

inquirer.prompt(questions).then((answers) => {
  const readmeContent = generateMarkdown(answers);
  const readmeFileName = 'README.md';
  const readmeFilePath = path.join(__dirname, readmeFileName);

  writeToFile(readmeFilePath, readmeContent);
  console.log(`Successfully generated ${readmeFileName}`);
});
}


