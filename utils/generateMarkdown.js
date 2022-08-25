// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // find function? need to research
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `
# ${data.title}
## Description
${data.description}
## Table of Contents

## Installation
${data.installation}
## Usage
${data.usage}
## Credits
${data.credits}
## License
${data.license}
## Badges

## How to Contribute
${data.tocontribute}
## Tests
${data.testing}
`;
}

module.exports = generateMarkdown;
