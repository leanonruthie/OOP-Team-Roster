// Work Reference #1 - 28-Stu_Mini-project/Main/index.js
// Work Reference #2 - 01-Activities/24-Stu_Subclasses
// Work Reference #3 - https://javascript.plainenglish.io/how-to-inquirer-js-c10a4e05ef1f
// Work Reference #4 - My Homework - Readme Generator
// Work reference #5 - My Brilliant Study Buddies/Tutors/TA/Instructor
// Work reference #6 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// Work reference #7 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./src/generateMarkdown.js');
// const Employee = require('./lib/Employee.js') 
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Please see line 64 to see where this const was used (inside promptAddition() else clause)
const employees = [];

function promptManager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
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
            message: 'What is the email of your manager in your department?',
        },
        {
            type: 'input',
            name: 'office',
            message: 'What is the office number of your manager in your department?',
        },
    ])
        .then((answers) => {
            // same language from Manager.js
            const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
            employees.push(manager);
            promptAddition()
        });
}

function promptAddition() {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'Would you like an engineer or an intern?',
            choices: ['Engineer', 'Intern', 'No']
        },
    ])
        .then((answers) => {
            if (answers.choice == "Engineer") {
                promptEngineer();
            } else if (answers.choice == "Intern") {
                promptIntern();
            } else {
                const htmlPageContent = generateMarkdown(employees);
                fs.writeFile('./dist/index.html', htmlPageContent, (err) =>
                err ? console.log(err) : console.log('Successfully created dist/index.html!')
                );
            };
        });
    }   

function promptEngineer() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your engineer in your department?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the id of your engineer in your department?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of your engineer in your department?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the github username of your engineer?',
        },
    ])
        .then((answers) => {
            // same language from Engineer.js
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            employees.push(engineer);
            promptAddition();
        });
}

function promptIntern() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your intern in your department?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the id of your intern in your department?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of your intern in your department?',
        }, 
        {
            type: 'input',
            name: 'school',
            message: 'Which school is your intern currently attending?',
        },
    ])
        .then((answers) => {
            // same language from Intern.js
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            employees.push(intern);
            promptAddition();
        });
}

promptManager();

// If I have more time, I'll try to work on "Bonus using writeFileSync as a promise" from Stu_Mini_Project
// const init = () => {
//     promptManager()
        // Use writeFileSync method to use promises instead of a callback function
//       .then((answers) => fs.writeFileSync('./dist/index.html', generateMarkdown(answers)))
//       .then(() => console.log('Successfully wrote to index.html'))
//       .catch((err) => console.error(err));
//   };
  
//   init();

