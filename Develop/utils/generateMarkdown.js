function renderLicenseBadge(license) {
  if (license === "Unlicensed") {
    return "";
  }

  return `![badge](https://img.shields.io/badge/license-${license}-brightgreen)`;
}

function renderLicenseLink(license) {
  if (license === "Unlicensed") {
    return "";
  }
  return "- [License](#license) ";
}

function renderLicenseSection(license) {
  if (license === "Unlicensed") {
    return "";
  }
  return ` ## License
  
 This project is is covered under the ${license} license.`;
}


function generateMarkdown(data) {
  return `# ${data.name} ${renderLicenseBadge(data.license)}

  ## Description
  ${data.descriptionProject}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  ${renderLicenseLink(data.license)}
  - [Tests](#tests)
  - [Contribute](#contribute)
  
  ## Installation
  ${data.descriptionInstallation}
  
  
  ## Usage
  ${data.usage}
  
  
  
  ${renderLicenseSection(data.license)}

  
  ## Contribute
  
  ${data.contributors}
  
  ## Tests

  ${data.test}
  
  ## Questions

  If you have any questions about the projects please contact me at anyone of the ways below.

  Github Username: ${data.username}

  Github profile link: https://github.com/${data.username}

  Email: ${data.email}
  `;
}

module.exports = generateMarkdown;
