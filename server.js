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

const idArray = [
  {
    name: "Sales Lead",
    value: 1
  },
  {
    name: "Salesman",
    value: 2
  },
  {
    name: "Junior Developer",
    value: 3
  },
  {
    name: "Software Engineer",
    value: 4
  },
  {
    name: "Lawyer",
    value: 5,
  },
  {
    name: "Accountant",
    value: 6,
  },
  {
    name: "Finance Analyst",
    value: 7,
  }
]; 

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
        "Update Employee",
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
      } else if (answer.start === "Update Employee") {
        updateEmployeeRole();
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


function addEmployee() {
 
    inquirer
        .prompt([
            {
                name: "firstName",
                type: "input",
                message: "What is the Employee's first name?",
            },
        
            {
                name: "lastName",
                type: "input",
                message: "What is the Employee's last name?",
            },
          {
            name: "employeeRole",
            type: "list",
            message: "What is the Employee's role?",
            choices: idArray
            },
        ]).then(function (answers) {
            console.log(answers.employeeRole)
            connection.query("INSERT INTO employees (first_name, last_name, role_id) VALUES (?, ?, ?)", [answers.firstName, answers.lastName, answers.employeeRole],
                function (err, data) {
                  if (err) throw err;
                    allEmployees();
                    startTracker();
                }
            );
          }
        )
}          
function addDepartment() {
    inquirer
        .prompt(
            {
                name: "departmentName",
                type: "input",
                message: "Please Enter a new department"
            }
        ).then(function (answers) {
            connection.query("INSERT INTO department (department_name) VALUES (?)", [answers.departmentName],
                function (err, data) {
                    if (err) throw err;
                    viewAllDepartments();
                    startTracker();
                }
            );
        });
    function viewAllDepartments(){
        connection.query("Select * from department", 
            function (err, data) {
                if (err) throw err;
                console.table(data);
            })
    }
}

function updateEmployeeRole() {
  connection.query(
    "SELECT first_name, last_name, title FROM employees INNER JOIN role ON employees.role_id = role.id ",
    function (err, data) {
      if (err) throw err;
      console.table(data);
      inquirer
        .prompt([
          {
            name: "indexNumber",
            type: "input",
            message: "Please enter the index of the employee you want to update"
          },
          {
            name: "newRole",
            type: "list",
            message: "What role would you like to update this employee to?",
            choices: idArray
          },
        ]).then(function (answers) {
          connection.query("UPDATE employees SET role_id = ? WHERE id = ?"),[answers.newRole, newNumer],
          function (err, data) {
            if (err) throw err;
            allEmployees();
          }
        })
      });
}
