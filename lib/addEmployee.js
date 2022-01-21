const db = require('./mysql_db');
const inquirer = require('inquirer')
const finalQuestion = require('./finalQuestion');




const addEmployee = (db) => {
    db.query('select * from employee', (err, response) => {
        const managerList = response.map(employee => {
            return {

            }
        })
    })
  inquirer
      .prompt([
        {
            type: 'input',
            message: 'What is employees First Name?',
            name: 'first_name'
        },
        {
            type: 'input',
            message: 'What is employees Last Name?',
            name: 'last_name'
        },
          {
              type: 'list',
              message: 'Enter employees title.',
              name: 'title',
              choices: dfgdsf
          },
        {
          type: 'list',
          message: 'Who is the employees manager?',
          name: 'employ_manager',
          choices: dfgdfgd
      }

      ])
      .then(response =>  {
        const first_name = response.first_name
        const last_name = response.last_name
        const title = response.title
        const employ_manager = response.employ_manager
        //INSERT INTO role SET ?, response

          db.query(`INSERT INTO role (first_name, last_name, role_id, manager_id) VALUES ('${first_name}', '${last_name}', '${title}', '${employ_manager}')`, (err, response) => {
          if (err) {
              return reject(err);
          }
          console.table(response);
          console.log('New employee added.'); 
          finalQuestion();
      });
    });
  };


module.exports = addEmployee;