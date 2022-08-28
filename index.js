// Work Reference #1 - 01-Activities/28-Stu_Mini-project/Solved/Bonus/index.js

const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateMarkdown.js');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const managerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the name of your manager in your department?',
        },
        {
            type: 'input',
            name: 'managerID',
            message: 'What is the id of your manager in your department?',
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is the email of your manager in your department?',
        },
        {
            type: 'input',
            name: 'office',
            message: 'What is the office number of your manager in your department?',
        },
        {
            type: 'confirm',
            name: 'addition',
            message: 'Do you want to add an employee to support your employee in your department?',
        },
    ]);
};

const engineerQuestions = () => {
    return inquirer.prompt([
    {
        type: 'list',
        name: 'choice',
        message: 'Would you like an engineer or an intern?',
        choices: ['Engineer', 'Intern']
    },
    {
        type: 'input',
        name: 'engineerName',
        message: 'What is the name of your engineer in your department?',
    },
    {
        type: 'input',
        name: 'engineerID',
        message: 'What is the id of your engineer in your department?',
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: 'What is the email of your engineer in your department?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the github username of your engineer?',
    },
]);
};

const internQuestions = () => {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'internName',
        message: 'What is the name of your intern in your department?',
    },
    {
        type: 'input',
        name: 'internID',
        message: 'What is the id of your intern in your department?',
    },
    {
        type: 'input',
        name: 'internEmail',
        message: 'What is the email of your intern in your department?',
    }, {
        type: 'input',
        name: 'school',
        message: 'Which school is your intern currently attending?',
    },
]);
};

const init = () => {
    //incorporate all three prompt functions with correct breaks 
         // Use writeFileSync method to use promises instead of a callback function
         .then((answers) => fs.writeFileSync('./dist/index.html', generateHTML(answers)))
         .then(() => console.log('Successfully wrote to index.html'))
         .catch((err) => console.error(err));
 };
 
 init();