const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown.js");
// const chalk = require("chalk");

//Welcome message
const welcome = [
    {
        type: 'confirm',
        prefix: '\b',
        name: 'welcome',
        message: "Thanks for using my README.md generator! You will be presented with options for your README's sections and their respective contents. To begin hit 'y' or enter.",

    }
];


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "Project title",
        name: 'title',
    },
    {
        type: 'input',
        message: "Project description",
        name: 'description',
    },
    {
        type: 'input',
        message: "Step by step guide for installation",
        name: 'install',
    },
    {
        type: 'input',
        message: "Instructions for usage",
        name: 'usage',
    },
    {
        type: 'input',
        message: "List any links or people to credit",
        name: 'credit',
    },
    {
        type: 'rawlist',
        name: 'license',
        message: 'Which open source license would you like to use? ',
        choices: ['Apache 2.0', 'BSD 2-Clause', 'BSD 3-Clause', 'GNU AGPLv3.0', 'GNU GPLv2.0', 'GNU GPLv3.0', 'MIT', 'Mozilla Public 2.0'],
    },
    // {
    //     type: 'input',
    //     message: "Show badges",
    //     name: 'badges',
    // }
    
];

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log("success")
    );
}

//Function to initialize the generator 
const init = async () => {
    try {
        await inquirer.prompt(welcome);
        const data = await inquirer.prompt(questions);
        writeToFile('./README.md', generateMarkdown(data));
    } catch (err) {
        console.log(err);
    }
}

//Function call to initialize program
init();