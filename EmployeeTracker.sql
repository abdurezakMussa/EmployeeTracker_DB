DROP DATABASE IF EXISTS employeeTracker_DB;
CREATE DATABASE employeeTracker_DB;

USE EmployeeTracker_DB;

CREATE TABLE employee(
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOt NULL,
  last_name VARCHAR(30) Not NULL,
  role_id INT NOT NULL,
  manager_id INT NULL,
  PRIMARY KEY (id)
);
INSERT INTO employee (first_name,last_name,role_id,manager_id)
VALUES ("Abdu", "Mussa", 1,1);
INSERT INTO employee (first_name,last_name,role_id,manager_id)
VALUES ("Zaid", "ABdu", 2,2);


CREATE TABLE department(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOt NULL,
  PRIMARY KEY (id)
);
INSERT INTO department (name)
VALUES ("developer");
INSERT INTO department (name)
VALUES ("Software Engineer");

CREATE TABLE role(
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOt NULL,
  salary DECIMAL Not NULL,
  department_id INT NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO role (title,salary,department_id)
VALUES ("Zaid", "ABdu", 1);
