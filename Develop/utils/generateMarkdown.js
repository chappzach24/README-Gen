// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Unlicensed") {
    return "";
  }

  return `![badge](https://img.shields.io/badge/license-${license}-brightgreen)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Unlicensed") {
    return "";
  }
  return "- [License](#license) ";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "Unlicensed") {
    return "";
  }
  return `  ## License
  
 This project is is covered under the ${license} license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name} ${renderLicenseBadge(data.license)}

  ## Description
  ${data.descriptionProject}
  
  ## Table of Contents (Optional)
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  ${renderLicenseLink(data.license)}
  
  ## Installation
  ${data.descriptionInstallation}
  
  
  ## Usage
  ${data.usage}
  
  
  ## Credits
  
  
  ${renderLicenseSection(data.license)}

  
 
  
  Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
  

  
  ## How to Contribute
  
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
