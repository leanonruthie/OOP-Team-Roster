// Work Reference #1 - 28-Stu_Mini-project/Main/index.js
// Work Reference #2 - 01-Activities/24-Stu_Subclasses
// Work Reference #3 - https://javascript.plainenglish.io/how-to-inquirer-js-c10a4e05ef1f
// Work Reference #4 - My Homework - Readme Generator
// Work reference #5 - My Brilliant Study Buddies/Tutors/TA/Instructor


function renderTeamRoster(team) {
    //Help from TA
    const html = [];
    html.push(team
    //Help from TA
    // filter out all employees by getRole() returning "Manager"
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => renderManager(manager))
    );
    // return the below html content for managers
    const renderManager = manager => {
        return `<ul id="Managers">
        <li class="name"> ${manager.getName()}</li>
        <li class="role"><img src="../dist/assets/icons/project-management-timeline-icon.png"> ${manager.getRole()}</li>
        <li class="id">ID: ${manager.getId()}</li>
        <li class="email">Email: <a href="mailto:${manager.getEmail()}"></a></li>
        <li class="office">Office: ${manager.getOffice()}</li>
        </ul>`
    }
    html.push(team
    // filter out all employees by getRole() returning "Engineer"
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => renderEngineer(engineer))
    );
    // return the below html content for managers
    const renderEngineer = engineer => {
        return `<ul id="Engineers">
                <li class="name"> ${engineer.name}</li>
                <li class="role"><img src="../dist/assets/icons/web-development-icon.png"> ${engineer.role}</li>
                <li class="id">ID: ${engineer.id}</li>
                <li class="email">Email: <a href="mailto:${engineer.email}"></a></li>
                <li class="office">GitHub: <a href = "https://github.com/${engineer.github}" target="blank"></a></li>
            </ul>`
    }
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => renderIntern(intern))
    );
    // return the below html content for managers
    const renderIntern = intern => {
        return `<ul id="Interns">
                <li class="name"> ${intern.name}</li>
                <li class="role"><img src="../dist/assets/icons/e-learning-icon.png"> ${intern.role}</li>
                <li class="id">ID: ${intern.id}</li>
                <li class="email">Email: <a href="mailto:${intern.email}"></a></li>
                <li class="office">School: ${intern.school}</li>
            </ul>`
    }
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
