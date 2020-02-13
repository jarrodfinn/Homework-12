DROP DATABASE IF EXISTS empSchema;

CREATE DATABASE employees;

USE employees;

CREATE TABLE department (
  id INT AUTO_INCREMENT NOT NULL,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY(id)
);

INSERT INTO department(name);
VALUES ("Sales");

INSERT INTO department(name);
VALUES ("Engineering");

INSERT INTO department(name);
VALUES ("Finance");

INSERT INTO department(name);
VALUES ("Legal");

-- Sales -department - 1;
-- Engineering -department - 2;
-- Finance -department - 3;
-- Legal -department - 4;


CREATE TABLE role(
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10, 2) NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY(id)
);
INSERT INTO role(title, salary, department_id);
VALUES ("Sales Lead", 100000, 1);

INSERT INTO role(title, salary, department_id);
VALUES ("Salesperson", 80000, 1);

INSERT INTO role(title, salary, department_id);
VALUES ("Lead Engineer", 150000, 2);

INSERT INTO role(title, salary, department_id);
VALUES ("Software Engineer", 125000, 2);

INSERT INTO role(title, salary, department_id);
VALUES ("Accountant", 120000, 3);

INSERT INTO role(title, salary, department_id);
VALUES ("Legal Team Lead", 250000, 4);

INSERT INTO role(title, salary, department_id);
VALUES ("Lawyer", 190000, 4);




CREATE TABLE employee (
    id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NOT NULL,
    PRIMARY KEY(id)
);
INSERT INTO employees();
VALUES ();


-- Build a command-line application that at a minimum allows the user to:
-- Add departments, roles, employees
-- View departments, roles, employees
-- Update employee roles