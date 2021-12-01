// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const generateMarkdown = (data) => {


    //Get date for the license copyright
  let year = new Date();

    //Add the README title
    let readmeTemplate = `# ${data.title}\n`;

  
    //Add the description heading and description
    readmeTemplate += `\n## Description\n${data.description}\n`;
  
  
    //Add installation heading and notes per users input
    if (data.install) {
      readmeTemplate += `\n## Installation\n${data.install}\n`;
    }
  
    //Add usage heading and notes per users input
    if (data.usage) {
      readmeTemplate += `\n## Usage\n${data.usage}\n`;
    }
  
    //Add credits heading and credit guidelines per users input
    if (data.credits) {
      readmeTemplate += `\n## Contributing\n${data.credits}\n`;
    }

      //Add a license section
  readmeTemplate += `\n## License \nLicensed under the ${data.license} License. Copyright \u00A9 ${year.getFullYear()}\n`;

  return readmeTemplate;
};

module.exports = generateMarkdown;