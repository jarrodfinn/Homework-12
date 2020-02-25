// Build a command-line application that at a minimum allows the user to:
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "rootroot",
  database: "employees"
});

connection.connect(function(err) {
  if (err) throw err;
  startUp();
});

function startUp() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View All Employees",
        "View All Departments",
        "View All Roles",
        "Add Employees",
        "Add Department",
        "Add Roles",
        "Update Employee Role",
        "exit"
      ]
    })
    .then(function(answer) {
      switch (answer.action) {
        case "View All Employees":
          empAllSearch();
          break;
        case "View All Departments":
          deptSearch();
          break;
        case "View All Roles":
          roleSearch();
          break;
        case "Add Employees":
          addEmp();
          break;
        case "Add Departments":
          addDept();
          break;
        case "Add Roles":
          addRole();
          break;
        case "Update Employee Roles":
          updateEmpRole();
          break;
        case "exit":
          connection.end();
          break;
      }
    });
};

function empAllSearch() {
  connection.query(
    "SELECT employee.employee_id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.role_id LEFT JOIN department on role.department_id = department.department_id LEFT JOIN employee manager on manager.manager_id = employee.manager_id;",
    function(err, res) {
      if (err) throw err;
      console.table(res);
      startUp();
    }
  );
};

function deptSearch() {
  connection.query("SELECT * from department", function(err, res) {
    if (err) throw err;
    console.table(res);
    startUp();
  });
};

function roleSearch() {
  connection.query("SELECT * from role", function(err, res) {
    if (err) throw err;
    console.table(res);
    startUp();
  });
};

function addEmp() {
  var questions = [
    {
      type: "input",
      message: "What's the employee's first name?",
      name: "first_name"
    },
    {
      type: "input",
      message: "What's the employee's last name?",
      name: "last_name"
    },
    {
      type: "input",
      message: "What's the employee's title?",
      name: "titleID"
    },
    {
      type: "input",
      message: "Who's the employee's manager?",
      name: "managerID"
    }
  ];
  inquirer.prompt(questions).then(function(answer) {
    connection.query(
      "INSERT INTO employee SET ?",
      {
        first_name: answer.first_name,
        last_name: answer.last_name,
        role_id: answer.titleID,
        manager_id: answer.managerID,
      },
      function(error) {
        if (error) throw error;
        startUp();
      }
    );
  });
};

function addDept() {
  inquirer
    .prompt({
      type: "input",
      message: "What would you like to name the new department?",
      name: "department"
    })
    .then(function(answer) {
        console.log(answer.department);
      connection.query("INSERT INTO department SET ?",
        {
          name: answer.department,
        },
        function(err, res) {
          if (err) throw err;
          startUp();
        });
    });
};

function addRole() {
  var questions = [
    {
      type: "input",
      message: "What type of role would you like to add?",
      name: "title"
    },
    {
      type: "input",
      message: "In what department is the new role?",
      name: "id"
    },
    {
      type: "list",
      message: "What is the salary for this role?",
      name: "salary"
    }
  ];
  inquirer.prompt(questions).then(function(answer) {
    connection.query(
      "INSERT INTO role SET ?",
      {
        title: answer.title,
        department_id: answer.id,
        salary: answer.salary
      },
      function(error, res) {
        if (error) throw error;
        startUp();
      }
    );
  });
};
function updateEmpRole() {};

// // Initiate MySQL Connection.
// connection.connect(function (err) {

//     if (err) {
//       console.error("error connecting: " + err.stack);
//       return;
//     }
//     console.log("connected as id " + connection.threadId);

//     connection.query("SELECT * from role", function (error, res) {
//       showroles = res.map(role => ({ name: role.title, value: role.id }))
//     })
//     connection.query("SELECT * from department", function (error, res) {
//       showdepartments = res.map(dep => ({ name: dep.name, value: dep.id }))
//     })
//     connection.query("SELECT * from employee", function (error, res) {
//       // console.log(error, res);
//       showemployees = res.map(emp => ({ name: `${emp.first_name} ${emp.last_name}`, value: emp.id }))
//     })

//     showmenu();
//   })
