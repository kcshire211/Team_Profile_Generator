const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")


const fs = require('fs');
const inquirer = require('inquirer');
const jest = require('jest');

const teamMembers = [];
//questions for each job role
const managerQuestions = [
    
    {
        type: 'input',
        message: "What is the team manager's name?",
        name: 'name',
},

    {
        type: 'input',
        message: "What is the manager's Employee ID?",
        name: 'id',
},

    {
        type: 'input',
        message: "What is the team manager's email address?",
        name: 'email',
  },

    {
        type: 'input',
        message: "What is the team manager's office number?",
        name: 'number',
 },

    {
        type: 'list',
        message: "Add new team member or finish building team:",
        name: 'team',
        choices: ["Add Engineer","Add Intern","Finish Building Team"],     
 },

];

const engineerQuestions = [
    
    {
        type: 'input',
        message: "What is the engineer's name?",
        name: 'name',
},

    {
        type: 'input',
        message: "What is the engineer's Employee ID?",
        name: 'id',
},

    {
        type: 'input',
        message: "What is the engineer's email address?",
        name: 'email',
  },

    {
        type: 'input',
        message: "What is the engineer's Github username?",
        name: 'number',
 },

    {
        type: 'list',
        message: "Add new team member or finish building team:",
        name: 'team',
        choices: ["Add Engineer","Add Intern","Finish Building Team"],     
 },

];

const internQuestions = [
    
    {
        type: 'input',
        message: "What is the intern's name?",
        name: 'name',
},

    {
        type: 'input',
        message: "What is the intern's Employee ID?",
        name: 'id',
},

    {
        type: 'input',
        message: "What is the intern's email address?",
        name: 'email',
  },

    {
        type: 'input',
        message: "What school does the intern attend?",
        name: 'github',
 },

    {
        type: 'list',
        message: "Add new team member or finish building team:",
        name: 'team',
        choices: ["Add Engineer","Add Intern","Finish Building Team"],     
 },

];


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Your index.html file has been created")
    });

}

//function to add another employee after team manager, or complete the team
function addNewEmployee(team) {
    if (team === "Add Engineer") {
        inquirer.prompt(engineerQuestions) 
        .then((answers) => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
            teamMembers.push(engineer)
            addNewEmployee(answers.team);

        })    
    } else if(team === "Add Intern") {
        inquirer.prompt(internQuestions) 
        .then((answers) => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
            teamMembers.push(intern)
            addNewEmployee(answers.team);

        })    
    } else {
        console.log("team created")
        //generate html
    }
}

// Function to initialize app
function init() {

    inquirer.prompt(managerQuestions) 
        .then((answers) => {
            console.log(answers);
            const manager = new Manager(answers.name, answers.id, answers.email, answers.number)
            teamMembers.push(manager)
            addNewEmployee(answers.team);
        })


}

// Function call to initialize app
init();


