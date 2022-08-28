// Work Reference #1 - 28-Stu_Mini-project/Main/index.js
// Work Reference #2 - 01-Activities/24-Stu_Subclasses
// Work Reference #3 - https://javascript.plainenglish.io/how-to-inquirer-js-c10a4e05ef1f
// Work Reference #4 - My Homework - Readme Generator
// Work reference #5 - My Brilliant Study Buddies

const renderEmployees = ({name, role, id, email, office, github, school }) =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="./assets/css/style.css">
    <title>Team Roster</title>
</head>

<body>
    <h1>Meet Our Department's Valuable Employees!</h1>
    <ul id="Managers">
        <li class="name"> Name
        </li>
        <li class="role"><img src="../dist/assets/icons/project-management-timeline-icon.png"> Role
        </li>
        <li class="id">ID: 
        </li>
        <li class="email">Email: <a href="mailto:"></a>
        </li>
        <li class="office">Office: 
        </li>
    </ul>
    <ul id="Engineers">
        <li class="name"> Name
        </li>
        <li class="role"><img src="../dist/assets/icons/web-development-icon.png"> Role
        </li>
        <li class="id">ID: 
        </li>
        <li class="email">Email: <a href="mailto:"></a>
        </li>
        <li class="office">Office: <a href = "https://github.com/" target="blank"></a>
        </li>
    </ul>
    <ul id="Interns">
        <li class="name"> Name
        </li>
        <li class="role"><img src="../dist/assets/icons/e-learning-icon.png"> Role
        </li>
        <li class="id">ID: 
        </li>
        <li class="email">Email: <a href="mailto:"></a>
        </li>
        <li class="office">Office: 
        </li>
    </ul>
</body>
</html>`


module.exports = generateMarkdown;
