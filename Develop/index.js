// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./generateMarkdown");

// TODO: Create an array of questions for user input
const questions = () => 
   inquirer.prompt([
       {
           type: "input",
           name: "title",
           message: "What is the title of your project?"
       },
       {
           type: "input",
           name: "email",
           message: "What is your email address?"
       },
       {
           type: "input",
           name: "username",
           message: "What is your Github username?"
       },
       {
           type: "input",
           name: "motivation",
           message: "What was your motivation to create this project?"
       },
       {
           type: "input",
           name: "build",
           message: "Why did you build this project?"
       },
       {
           type: "input",
           name: "problem",
           message: "What problem does it solve?"
       },
       {
           type: "input",
           name: "learn",
           message: "What did you learn?"
       },
       {
           type: "input",
           name: "stand",
           message: "What makes your project stand out?"
       }
   ]);


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
async function init() {
    try {
        const response = await promptUser();

        const readMe = generateMarkdown(response);

        await writeToFile("README.md", readMe);
        console.log("Mission Accomplished!");
    } catch (err) {
        console.log(err);
    }
}

// Function call to initialize app
init();