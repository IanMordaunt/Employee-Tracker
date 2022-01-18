const db = require('./mysql_db');

const getDepartments = () => {
    
    return new Promise ((resolve, reject) => {
        
        db.query('SELECT * FROM department', (err, data) => {
            if (err) {
                return reject(err);
            }
            resolve(data);
        });
    });
}

module.exports = getDepartments;