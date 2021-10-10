
const fs = require('fs');
const inquirer = require('inquirer');
const jest = require('jest');



const questions = [
    
    {
        type: 'input',
        message: "What is the team manager's name?",
        name: 'manager-name',
},

    {
        type: 'input',
        message: "What is the manager's Employee ID?",
        name: 'manager-id',
},

    {
        type: 'input',
        message: "What is the team manager's email address?",
        name: 'manager-email',
  },

    {
        type: 'input',
        message: "What is the team manager's office number?",
        name: 'manager-number',
 },

    {
        type: 'list',
        message: "Add new team member or finish building team:",
        name: 'team',
        choices: ["Add Engineer","Add Intern","Finish Building Team"],     
 },



 
];


//code below from previous hw


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }

        console.log("Your README.md file has been created")
    });

}




// TODO: Create a function to initialize app
function init() {

    const userResponse = inquirer.prompt(questions) 
        .then((answers) => writeToFile("README.md", generateMarkdown(answers)))


}

// Function call to initialize app
init();
