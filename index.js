const inquirer = require('inquirer');
const mysql = require('mysql2');

const db = mysql.createConnection({
  user: 'root',
  database: 'employee_db'
});

function init() {
  inquirer
  .prompt([
      {
          type: 'list'.
          message: 'Would you like to view or add?',
          choices: ['add','view'],
          name: 'choice',
      },
      {
        type: 'list'.
        message: 'What do you want to add?',
        choices: ['roles','departments','employees'],
        name: 'addSelections',
        when: (selection) => selection.choice === 'add'
      },
      {
      type: 'list'.
      message: 'What would you like to view?',
      choices: ['roles','departments','employees'],
      name: 'viewSelection',
      when: (selection) => selection.choice === 'view'
    },
    {
        message: 'what department would you like to add to?'
        name: 'departmentName',
        when: (selection) => selection.addselection === 'department'
    }

])
.then((selections) => {
    const {choice, addSelection, viewSelection} = selections;
    switch (choice) {
        case 'view';
        db.query('SELECT * FROM $(viewSelection);', {err,results} => {
            console.table(results)
            init()
        }};
        break;
        case 'add'
        if{
            
        }
}
)
}