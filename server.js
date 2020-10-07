var mysql = require("mysql");
var inquirer = require("inquirer");
const { listenerCount } = require("process");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Loser741?",
  database: "employees_db"
});

connection.connect(function(err) {
  if (err) throw err;
    console.log("connected as id " + connection.threadId);
    startTracker();
});

function startTracker() {
    inquirer
        .promt({
            name: "start",
            message: "What would you like to do?",
            type: list,
            choices: [
                "View All Employees",
                "View All Employees by Department",
                "View All Employees by Role",
                "Add Employee",
                "Add Department",
                "EXIT",
            ],
        }).then(function (answer) {
            if (answer.start === "View All Employees") {
                allEmployees();
            }
            else if (answer.start === "View All Employees by Department") {
                allEmployeesByDepartment();
            }
            else if (answer.start === "View All Employees by Role") {
                allEmployeesByRole();
            }
            else if (answer.start === "Add Employee") {
                addEmployee();
            }
            else if (answer.start === "Add Department") {
                addDepartment();
            }
            else if (answer.start === "EXIT") {
                connection.end
            }
        });
}
