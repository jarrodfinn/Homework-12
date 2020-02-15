DROP DATABASE IF EXISTS employees;

CREATE DATABASE employees;

USE employees;

CREATE TABLE department( 
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR (30) NOT NULL,
    PRIMARY KEY (id)
);

    INSERT INTO department (name);
    VALUES ("Sales", "Engineering", "Finance", "Legal");

    -- Sales -department - 1;
    -- Engineering -department - 2;
    -- Finance -department - 3;
    -- Legal -department - 4;


    CREATE TABLE role (
        id INT AUTO_INCREMENT NOT NULL,
        title VARCHAR 30) NOT NULL,
        salary DECIMAL
        (10, 2) NOT NULL,
        department_id INT NOT NULL,
        PRIMARY KEY (id)
);
        INSERT INTO role (title, salary, department_id);
        VALUES ("Sales Lead", 100000, 1);

        INSERT INTO role (title, salary, department_id);
        VALUES ("Salesperson", 80000, 1);

        INSERT INTO role (title, salary, department_id);
        VALUES ("Lead Engineer", 150000, 2);

        INSERT INTO role (title, salary, department_id);
        VALUES ("Software Engineer", 125000, 2);

        INSERT INTO role (title, salary, department_id);
        VALUES ("Account Manager", 160000, 3);

        INSERT INTO role (title, salary, department_id);
        VALUES ("Accountant", 120000, 3);

        INSERT INTO role (title, salary, department_id);
        VALUES ("Legal Team Lead", 250000, 4);

        INSERT INTO role (title, salary, department_id);
        VALUE ("Lawyer", 190000, 4);




    CREATE TABLE employee(
        id INT AUTO_INCREMENT NOT NULL,
        first_name VARCHAR (30) NOT NULL,
        last_name VARCHAR (30) NOT NULL,
        role_id INT NOT NULL,
        manager_id INT NOT NULL,
        PRIMARY KEY (id)
);
            INSERT INTO employee (first_name, last_name, role_id, manager_id)
            VALUES ("Julia", "Spieler", 1, null);

            INSERT INTO employee (first_name, last_name, role_id, manager_id)
            VALUES ("Jarrod", "Finn", 2, null);

            INSERT INTO employee (first_name, last_name, role_id, manager_id)
            VALUES ("Ryan", "Ravenscroft", 3, null);

            INSERT INTO employee (first_name, last_name, role_id, manager_id)
            VALUES ("Ashley", "Everett", 4, null);

            INSERT INTO employee (first_name, last_name, role_id, manager_id)
            VALUES ("Jan", "Finn", 5, null);

            INSERT INTO employee (first_name, last_name, role_id, manager_id)
            VALUES  ("Austin", "Bickford", 6, null);

            INSERT INTO employee (first_name, last_name, role_id, manager_id)
            VALUES  ("Ian", "Rubin", 7, null);
            
            INSERT INTO employee (first_name, last_name, role_id, manager_id)
            VALUES ("Jane", "Rubin", 8, null);
            
            INSERT INTO employee  (first_name, last_name, role_id, manager_id)
            VALUES ("Amanda", "Hugankiss", 8, null);




-- Build a command-line application that at a minimum allows the user to:
-- Add departments, roles, employees
-- View departments, roles, employees
-- Update employee roles