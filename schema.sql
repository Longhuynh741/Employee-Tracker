DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;
Use employee_db;

CREATE TABLE department (
	id INT NOT NULL AUTO_INCREMENT,
    department_name VARCHAR (30) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE role (
	id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR (30) NOT NULL,
    salary DECIMAL (10,2),
    department_id INT NOT NULL, 
	PRIMARY KEY (id)
);
    
CREATE TABLE employees (
	id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR (30) NOT NULL,
    last_name VARCHAR (30) NOT NULL,
    role_id INT NOT NULL,
	PRIMARY KEY (id)
);

INSERT INTO department (department_name) VALUES ("Sales"),("Engineering"), ("Legal"), ("Finance"); 
INSERT INTO role (title, salary, department_id) VALUES ("Sales Lead", 90000, 1),("Salesman", 65000, 1), ("Junior Developer", 70000, 2),("Software Engineer", 150000, 2),("Lawyer", 120000, 3), ("Accountant", 125000, 4),("Finance Analyst", 80000, 4);
INSERT INTO employees (first_name, last_name, role_id) VALUES ("Dalena", "Le", 6), ("Long", "Huynh", 4), ("Hai", "Huynh", 1), ("Amanda", "Le", 5), ("Johnny", "Tran", 7);