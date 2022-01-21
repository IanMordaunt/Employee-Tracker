const mysql = require('mysql2');
// const Sequelize = require('sequelize');
// require('dotenv').config();

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Ian8mord',
        database: 'employees_db'
    }
);

console.log("Connected to the employee database.");

module.exports = db;



// const sequelize = new Sequelize(
//        process.env.DB_NAME,
//        process.env.DB_USER,
//        process.env.DB_PASSWORD,

//     {
//       host: 'localhost',
//       dialect: 'mysql',
//       port: 3306
//     }
//   );
  
//   module.exports = sequelize;
  