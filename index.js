
const fs = require('fs');
const inquirer = require('inquirer');
const jest = require('jest');



const questions = [
    
    {
        type: 'input',
        message: "What is the title of the application?",
        name: 'title',
},

    {
        type: 'input',
        message: "What is the title of the application?",
        name: 'title',
},

    {
        type: 'input',
        message: "What is the title of the application?",
        name: 'title',
  },

    {
        type: 'input',
        message: "What is the title of the application?",
        name: 'title',
 },

    {
        type: 'input',
        message: "What is the title of the application?",
        name: 'title',
  },
    
    

    {
        type: 'list',
        message: "Which licesnse will you be using?",
        name: 'license',
        choices: ["GPL_3.0","BSD_3","MIT","none"],
        
 },



 
];

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
