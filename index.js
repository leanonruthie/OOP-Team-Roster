// Work Reference #1 - 28-Stu_Mini-project/Main/index.js
// Work Reference #2 - 01-Activities/24-Stu_Subclasses
// Work Reference #3 - https://javascript.plainenglish.io/how-to-inquirer-js-c10a4e05ef1f
// Work Reference #4 - My Homework - Readme Generator

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./src/generateMarkdown.js');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

function promptManager() {
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
            type: 'list',
            name: 'choice',
            message: 'Would you like an engineer or an intern?',
            choices: ['Engineer', 'Intern']
        },
    ]);
}

function promptEngineer() {
    return inquirer.prompt([
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
}

function promptIntern() {
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
}

 function moveToChoice() {
    promptManager()
     if (answers.choice == "Engineer") {
        promptEngineer();
    } else if (answers.choice == "Intern") {
    promptIntern();
    };
}


const init = () => {
    moveToChoice()
    .then((data) => fs.writeFileSync('./dist/index.html', generateMarkdown(data)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
}
init();
