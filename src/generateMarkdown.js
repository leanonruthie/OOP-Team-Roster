// Work Reference #1 - 28-Stu_Mini-project/Main/index.js
// Work Reference #2 - 01-Activities/24-Stu_Subclasses
// Work Reference #3 - https://javascript.plainenglish.io/how-to-inquirer-js-c10a4e05ef1f
// Work Reference #4 - My Homework - Readme Generator
// Work reference #5 - My Brilliant Study Buddies/Tutors/TA/Instructor
// Work reference #6 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// Work reference #7 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map


function renderTeamRoster(team) {
    // Incorporate sample from TA instead of running a conventional for loop - Work References #6 and #7
    const html = [];
    // Set const for manager => {} then return the below html content for managers
    const renderManager = manager => {
        return `<ul id="Managers">
        <li class="name"> ${manager.getName()}</li>
        <li class="role"><img src="../dist/assets/icons/project-management-timeline-icon.png"> ${manager.getRole()}</li>
        <li class="id">ID: ${manager.getId()}</li>
        <li class="email">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
        <li class="office">Office: ${manager.getOfficeNumber()}</li>
        </ul>`
    }
    html.push(team
    // Now filter out all employees by getRole() returning "Manager"
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => renderManager(manager))
    );
    // Set const for engineer => {} then return the below html content for managers
    const renderEngineer = engineer => {
        return `<ul id="Engineers">
                <li class="name"> ${engineer.getName()}</li>
                <li class="role"><img src="../dist/assets/icons/web-development-icon.png"> ${engineer.getRole()}</li>
                <li class="id">ID: ${engineer.getId()}</li>
                <li class="email">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="office">GitHub: <a href = "https://github.com/${engineer.getGithub()}" target="blank">${engineer.getGithub()}</a></li>
            </ul>`
    }
    html.push(team
    // Now filter out all employees by getRole() returning "Engineer"
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => renderEngineer(engineer))
    );
    //  Set const for intern => {} then return the below html content for managers
    const renderIntern = intern => {
        return `<ul id="Interns">
                <li class="name"> ${intern.getName()}</li>
                <li class="role"><img src="../dist/assets/icons/e-learning-icon.png"> ${intern.getRole()}</li>
                <li class="id">ID: ${intern.getId()}</li>
                <li class="email">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="office">School: ${intern.getSchool()}</li>
            </ul>`
    }
    // Now filter out all employees by getRole() returning "Intern"
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => renderIntern(intern))
    );
        return html.join("");
    }

function generateMarkdown(team) {
    return `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <link rel="stylesheet" href="./assets/css/style.css">
                <title>Team Roster</title>
            </head>

            <body>
                    <h1>Meet Our Department's Valuable Employees!</h1>
                    ${renderTeamRoster(team)}
            </body>
            </html>`;
}

module.exports = generateMarkdown;
