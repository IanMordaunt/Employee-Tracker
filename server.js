const { response } = require('express');
const inquirer = require('inquirer');
const db = require('./lib/mysql_db');

// Get functions
const getDepartments = require('./lib/getDeparments')





// Initial application prompt 
init = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'request',
                message: 'What would you like to do?',
                choices: [
                    'View All Departments', 
                    'View All Roles',
                    'View All Employees',
                    'Add a Department',
                    'Add a Role',
                    'Add an Employee',
                    'Update Employee Role'
                ]
            }
        ])

        .then(response => {
            switch (response.request) {

            }
        })