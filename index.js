// Work Reference - My HW last week - Readme Generator Using NodeKS

const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');

const questions = [{
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
{
    type: 'list',
    name: 'choice',
    message: 'Would you like an engineer or an intern?',
    choices: ['Engineer','Intern']
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
},{
    type: 'input',
    name: 'school',
    message: 'Which school is your intern currently attending?',
},
]

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log('Success!')
        }
    });
}

function init() {
    inquirer.prompt(questions)
        .then((data) => writeToFile('index.html', generateHTML(data)))
        .then(() => console.log('Successfully wrote to index.html'))
        .catch((err) => console.error(err));
}

init();