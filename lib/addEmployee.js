const db = require('./mysql_db');
const inquirer = require('inquirer')
const finalQuestion = require('./finalQuestion');
const getRole = require('./getRole');
const getEmployees = require('./getEmployees');

const getManagerNames = () => {
    return new Promise(resolve => {
        let names = [];
        names.push("None");
        db.promise().query(`select distinct b.first_name, b.last_name from employee as a, employee as b where a.manager_id = b.id`)
            .then((response) => {
                for (let i = 0; i < response[0].length; i++) {
                    names.push(response[0][i].first_name + " " + response[0][i].last_name);
                }
                resolve(names);
            }).catch(console.log);
    });
};


const addEmployee = async (db) => {
    db.query('select * from role', (err, response) => {
        const roleList = response.map(role => {
            return {
                name: role.title,
                value: role.id
            }
        })

    db.query('select distinct b.first_name, b.last_name from employee as a, employee as b where a.manager_id = b.id', (err, response) => {
        const managerList = response.map(employee => {
            return {
                 name: employee.manager,
                 value: employee.id
             }
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
              choices: roleList
          },
        {
          type: 'list',
          message: 'Who is the employees manager?',
          name: 'employ_manager',
          choices: managerList
      }

      ])
      .then(response =>  {
        // const first_name = response.first_name
        // const last_name = response.last_name
        // const title = response.title
        // const employ_manager = response.employ_manager

        const query = `INSERT INTO role (first_name, last_name, role_id, manager_id) VALUES (${response.first_name}, ${response.last_name}, ${response.title}, ${response.employ_manager})`;
    

          db.query(query, (err, response) => {
            if(err) {
                throw err;
            } console.table(response);
          console.log('New employee added.'); 
          finalQuestion();
      })
      console.log(response);
    })
  })
})
}


module.exports = addEmployee;