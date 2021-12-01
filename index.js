const inquirer = require("inquirer");
const fs = require("fs");


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
        type: 'input',
        message: "Provide license link",
        name: 'license',
    },
    {
        type: 'input',
        message: "Show badges",
        name: 'badges',
    }
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();