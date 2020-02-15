// Build a command-line application that at a minimum allows the user to:
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "rootroot",
  database: "employees"
});

connection.connect(function(err) {
    if (err) throw err;
    startUp();
  });


// Add departments, roles, employees

// View departments, roles, employees

// Update employee roles


function startUp() {
    inquirer
      .prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
          "View All Employees",
          "View All Employees By Department",
          "View All Employees By Manager",
          "Add Employee",
          "Remove Employee",
          "Update Employee Role",
          "Update Employee Manager",
          "exit"
        ]
      })
      .then(function(answer) {
        switch (answer.action) {
        case "View All Employees":
            employeeSearch();
            break;
  
        case "View All Employees By Department":
            deptEmpSearch();
            break;
  
        case "View All Employees By Manager":
            managerEmpSearch();
            break;
  
        case "Add Employee":
            addEmp();
            break;
          
        case "Remove Employee":
            removeEmp();
            break;
            
        case "Update Employee Role":
            updateEmpRole();
            break;
        
        case "Update Employee Manager":
            updateEmpManager();
            break;
      
        case "exit":
          connection.end();
          break;
        }
      });
  }
// Bonus points if you're able to:
    // Update employee managers
    // View employees by manager
    // Delete departments, roles, and employees
    // View the total utilized budget of a department -- ie the combined salaries of all employees in that department




  