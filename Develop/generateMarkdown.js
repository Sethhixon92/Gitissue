// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Test](#test)
  - [Credits](#credits)
  - [License](#license)
  - [Questions](#questions)
  
  ## Description: 
     ${response.description}
  ## Installation: 
     ${response.installation}
  ## Usage:
     ${response.usage}
  ## Contributing:
     ${response.contributing}
  ## Test: 
     ${response.test}
  ## Credits: 
    ${response.credits}
  ## License:
    ${response.license}
  ## Questions:
    ${response.questions}
    
`;
}

module.exports = generateMarkdown;