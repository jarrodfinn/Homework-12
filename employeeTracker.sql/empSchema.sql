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


CREATE TABLE role(
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10, 2) NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY(id)
);
INSERT INTO role();
VALUES ();


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