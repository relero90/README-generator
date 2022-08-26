// A function that returns a license badge based on which license is passed in
// If there is no license, return an N/A badge
function renderLicenseBadge(license) {
  let licensePick = license;
  let message = "";
  let color = "";
  const label = "license";
  let badgeURL = "";
  // Switch statement generates value of label, message, color & adds them to URL
  switch (licensePick) {
    case "Apache License 2.0":
      message = "Apache_2.0";
      color = "success";
      badgeURL = `https://img.shields.io/badge/${label}-${message}-${color}`;
      break;
    case "GNU GPL v3":
      message = "GPL_v3";
      color = "blue";
      badgeURL = `https://img.shields.io/badge/${label}-${message}-${color}`;
      break;
    case "MIT":
      message = "MIT";
      color = "yellow";
      badgeURL = `https://img.shields.io/badge/${label}-${message}-${color}`;
      break;
    case "ISC":
      message = "ISC";
      color = "blue";
      badgeURL = `https://img.shields.io/badge/${label}-${message}-${color}`;
      break;
    default:
      message = "NA";
      color = "lightgrey";
      badgeURL = `https://img.shields.io/badge/${label}-${message}-${color}`;
  }
  return badgeURL;
}

// A function that returns the license link
function renderLicenseLink(license) {
  // Pull user licensePick
  let licensePick = license;
  // Switch statement generates value of reference URL based on user licensePick
  switch (licensePick) {
    case "Apache License 2.0":
      linkURL = `https://choosealicense.com/licenses/apache-2.0/`;
      break;
    case "GNU GPL v3":
      linkURL = `https://choosealicense.com/licenses/gpl-3.0/`;
      break;
    case "MIT":
      linkURL = `https://choosealicense.com/licenses/mit/`;
      break;
    case "ISC":
      linkURL = `https://choosealicense.com/licenses/isc/`;
      break;
    default:
      linkURL = "";
  }
  return linkURL;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseBadge = renderLicenseBadge(license); // returns badgeURL
  let licenseDesc = renderLicenseLink(license); // returns linkURL
  return [licenseBadge, licenseDesc];
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  let licenseSec = renderLicenseSection(data.license);

  return `
# ${data.title}
![${data.license}](${licenseSec[0]})

## Description
---
${data.description}

## Table of Contents
---
1. [Installation](#installation)
1. [Usage Recommendations](#usage)
1. [Licensing](#licensing)
1. [Credits](#credits)
1. [How to Contribute](#how-to-contribute)
1. [Testing](#testing)
1. [Questions?](#questions)

## Installation
---
${data.installation}

## Usage Recommendations
---
${data.usage}

## Licensing
---
[Click here for more information about the ${data.license} license](${licenseSec[1]})

## Credits
---
${data.credits}

## How to Contribute
---
${data.tocontribute}

## Testing
---
${data.testing}

## Questions?
---
* Email: [${data.email}](${data.email})
* GitHub: [${data.github}](https://github.com/${data.github})   
`;
}

module.exports = generateMarkdown;
