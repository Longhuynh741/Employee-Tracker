var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Loser741?",
  database: "employee_db",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  startTracker();
});

function startTracker() {
  inquirer
    .prompt({
      name: "start",
      message: "What would you like to do?",
      type: "list",
      choices: [
        "View All Employees",
        "View All Employees by Department",
        "View All Employees by Role",
        "Add Employee",
        "Add Department",
        "EXIT",
      ],
    })
    .then(function (answer) {
      if (answer.start === "View All Employees") {
        allEmployees();
      } else if (answer.start === "View All Employees by Department") {
        allEmployeesByDepartment();
      } else if (answer.start === "View All Employees by Role") {
        allEmployeesByRole();
      } else if (answer.start === "Add Employee") {
        addEmployee();
      } else if (answer.start === "Add Department") {
        addDepartment();
      } else if (answer.start === "EXIT") {
        connection.end;
      }
    });
}

function allEmployees() {
  connection.query(
    "SELECT first_name, last_name, department_name, title, salary FROM employees INNER JOIN role ON employees.role_id = role.id INNER JOIN department ON role.department_id = department.id;",
    function (err, data) {
      if (err) throw err;
      console.table(data);
      startTracker();
    }
  );
}

function allEmployeesByDepartment() {
    inquirer
        .prompt({
            name: "selection",
            message: "Which department are you looking for?",
            type: "list",
            choices: ["Legal", "Engineering", "Sales", "Finance"],
        }).then(function ({selection}) {
            console.log(selection)
            connection.query("SELECT first_name, last_name, department_name, title, salary FROM employees INNER JOIN role ON employees.role_id = role.id INNER JOIN department on role.department_id = department.id WHERE department_name = ?;", [selection],
                function (err, data) {
                    if (err) throw err;
                    console.table(data);
                    startTracker();
                })
        });
}
function allEmployeesByRole() {
    inquirer
        .prompt({
            name: "selection",
            message: "Which role are you looking for?",
            type: "list",
            choices: ["Sales Lead","Salesman","Junior Developer", "Software Engineer", "Lawyer", "Accountant", "Finance Analyst"],
        }).then(function ({selection}) {
             connection.query(
              "SELECT first_name, last_name, title, salary FROM employees INNER JOIN role ON employees.role_id = role.id WHERE role.title = ?", [selection],
                function (err, data) {
              if (err) throw err;
             console.table(data);
                    startTracker();
                })
    });
}


// function allEmployeesByDepartment() {
//   connection.query(
//     "SELECT first_name, last_name, department_name, title, salary FROM employees INNER JOIN role ON employees.role_id = role.id INNER JOIN department ON role.department_id = department.id;",
//     function (err, data) {
//       if (err) throw err;
//       console.table(data);
//       startTracker();
//     }
//   );
// }

// function allEmployeesByDepartment() {
//   connection.query(
//     "SELECT first_name, last_name, department_name, title, salary FROM employees INNER JOIN role ON employees.role_id = role.id INNER JOIN department ON role.department_id = department.id;",
//     function (err, data) {
//       if (err) throw err;
//       console.table(data);
//       startTracker();
//     }
//   );
// }
