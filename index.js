// Build a command-line application that at a minimum allows the user to:
var mysql = require("mysql");
var inquirer = require("inquirer");
// const confirm = require('inquirer-confirm');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "rootroot",
    database: "employees"
});

connection.connect(function (err) {
    if (err) throw err;
      connection.query("SELECT * from employee", function (error, res) {
        // console.log(error, res);
        showEmp = res.map(emp => ({ name: `${emp.first_name} ${emp.last_name}`, value: emp.id }))
      })
      connection.query("SELECT * from department", function (error, res) {
        showDept = res.map(dep => ({ name: dep.name, value: dep.id }))
      })
      connection.query("SELECT * from role", function (error, res) {
        showRole = res.map(role => ({ name: role.title, value: role.id }))
      })

    startUp();
});

// Add departments, roles, employees
// View departments, roles, employees
// Update employee roles

// Bonus points if you're able to:
// Update employee managers
// View employees by manager
// Delete departments, roles, and employees
// View the total utilized budget of a department -- ie the combined salaries of all employees in that department


function startUp() {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View All Employees",
                "View All Department",
                "View All Roles",
                "Add Employee",
                "Add Department",
                "Add Role",
                "Update Employee Role",
                "exit"
            ]
        })
        .then(function (answer) {
            switch (answer.action) {
                case "View All Employees":
                    empAllSearch();
                    break;
                case "View All Department":
                    deptSearch();
                    break;
                case "View All Roles":
                    roleSearch();
                    break;
                case "Add Employee":
                    addEmp();
                    break;
                case "Add Department":
                    addDept();
                    break;
                case "Add Role":
                    addRole();
                    break;
                case "Update Employee Role":
                    updateEmpRole();
                    break;
                case "exit":
                    connection.end();
                    break;
            }
        });
};

function empAllSearch() {
    connection.query("SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;", function (err, res) {
        if (err) throw err;
        console.table(res);
        startUp();
    });
};

function deptSearch() {
    connection.query("SELECT * from department", function (err, res) {
        if (err) throw err;

      console.table(res);
      startUp();
    })  
};

function roleSearch() {
    connection.query("SELECT * from role", function (err, res) {
        if (err) throw err;

      console.table(res);
      startUp();
    })  

};

function addEmp() {
    inquirer
    .prompt([
      {
        type: 'input',
        message: "What is the first name?",
        name: "firstName",
      },
      {
        type: "input",
        message: "What is the last name?",
        name: "lastName",
      },
      {
        type: "list",
        message: "What is the employee's title?",
        name: "title",
        choices: showRole,
      },
      {
        type: "list",
        message: "Who is the employee's manager?",
        name: "manager",
        choices: showEmp,
      }
    ]).then(function (response) {
    //   addEmp(response)
    startUp();

    })

};

function addEmp(data) {

    connection.query("INSERT INTO employee SET ?",
      {
        first_name: data.firstName,
        last_name: data.lastName,
        role_id: data.title,
        manager_id: data.manager
      }, function (error, res) {
        if (error) throw error;
      })
      startUp();
};

function addDept(){
    inquirer
    .prompt([
      {
        type: 'input',
        message: "What is the first name?",
        name: "firstName",
      },
      {
        type: "input",
        message: "What is the last name?",
        name: "lastName",
      },
      {
        type: "list",
        message: "What is the employee's title?",
        name: "title",
        choices: showRole,
      },
      {
        type: "list",
        message: "Who is the employee's manager?",
        name: "manager",
        choices: showEmp,
      }
    ]).then(function (response) {
    //   addEmp(response)
    startUp();

    })

};

function addRole(){

};
