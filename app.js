const inquirer = require('inquirer');
console.log(inquirer);
// const fs = require('fs');
// const generatePage = require('./src/page-template');

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'age',
        message: 'How old are you?'
      }
  ])
  .then(answers => console.log(answers));
