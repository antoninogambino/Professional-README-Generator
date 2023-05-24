const fs = require('fs');
const path = require('path');

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
}