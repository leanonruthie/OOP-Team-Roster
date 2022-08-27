// Work Reference - 09-NodeJS - 28-Stu_Mini_Project

const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');

const questions = [{
    type: 'input',
    name: 'manager',
    message: 'What is the name of your manager in your department?',
},
{
    type: 'input',
    name: 'id',
    message: 'What is the id of your manager in your department?',
},
{
    type: 'input',
    name: 'email',
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
    name: 'github',
    message: 'What is the github username of your engineer?',
},
{
    type: 'input',
    name: 'school',
    message: 'Which school is your intern currently attending?',
},
]
// From my homework last week
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