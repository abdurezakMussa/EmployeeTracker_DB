DROP DATABASE IF EXISTS employeeTracker_DB;
CREATE DATABASE employeeTracker_DB;

USE EmployeeTracker_DB;


CREATE TABLE department(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOt NULL,
  PRIMARY KEY (id)
);


CREATE TABLE role(
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOt NULL,
  salary int Not NULL,
  department_id INT  NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (department_id) REFERENCES department (id)
);
CREATE TABLE employee(
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOt NULL,
  last_name VARCHAR(30) Not NULL,
  role_id INT  NULL,
  manager_id INT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (role_id) REFERENCES role(id)

);

INSERT INTO department (name)
VALUES ("developer");
INSERT INTO department (name)
VALUES ("SoftwareEngineer");

INSERT INTO role (title,salary,department_id)
VALUES ("programmer", 65000, 1);

INSERT INTO role (title,salary,department_id)
VALUES ("Projec tManager", 605000, 2);

INSERT INTO employee (first_name,last_name,role_id,manager_id)
VALUES ("Abdu", "Mussa", 1,null);

INSERT INTO employee (first_name,last_name,role_id,manager_id)
VALUES ("Zaid", "ABdu", 2,1);


use employeetracker_db;
select e.id,e.first_name,e.last_name,r.title,d.name as Department, r.salary, CONCAT(semp.last_name,' ',semp.first_name) AS 'Manager'
from role r join employee e on r.id= e.role_id  
join department d on r.department_id=d.id
left join employee semp on semp.manager_id= e.id ;