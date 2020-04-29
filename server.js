var mysql = require("mysql");
const inquirer = require("inquirer");
//const mysql = require("mysql");
const questions = require("./questions");
//const consoleTable = require('console.table');


var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "employeeTracker_DB"

});

connection.connect(function (err) {
    // read
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    startApp();
});


function startApp() {
    inquirer.prompt([
        {
            type: "list",
            message: "what would you like to do",
            choices: [
                "addEmployee",
                "viewEmployee",
                "addDepartment",
                "viewDepartment",
                "addRoles",
                "viewRoles",
                "updateEmployeeroles",
                "Exit"],
            name: "choice"
        }

    ]).then(function (data) {
        switch (data.choice) {
            case "addDepartment":
                return addDepartment();
            case "addRoles":
                return addRoles();
            case "addEmployee":
                return addEmployee();
            case "viewDepartment":
                return viewDepartment();
            case "viewEmployee":
                return viewEmployee();
            case "viewRoles":
                return viewRoles();
            case "updateEmployeeroles":
                return updateRoles();
            default:
                return exit();
        }

    });
}
/////////////////////////////Exit function does end connection///////////////////////////////////
function exit() {
    console.log("end connection");
    connection.end();
}
/////////////////////////////View all department records///////////////////////////////////
function viewDepartment() {
    const query = `SELECT *  FROM department ;`
    connection.query(query, (err, rows) => {
        if (err) throw err;

        console.log('Data received from Db:');
        console.table(rows);
    });
    startApp();
}

/////////////////////////////View all employee records///////////////////////////////////
function viewEmployee() {
    const query = `select e.id,e.first_name,e.last_name,r.title,d.name as Department, r.salary, CONCAT(semp.last_name,' ',semp.first_name) AS 'Manager'
    from role r join employee e on r.id= e.role_id  
    join department d on r.department_id=d.id
    left join employee semp on semp.manager_id= e.id ;`
    connection.query(query, (err, rows) => {
        if (err) throw err;

        console.log('Data received from Db:');
        console.table(rows);
    });
    startApp();
}
/////////////////////////////View all role records///////////////////////////////////
function viewRoles() {
    const query = `SELECT *  FROM role ;`
    connection.query(query, (err, rows) => {
        if (err) throw err;

        console.log('Data received from Db:');
        console.table(rows);
    });
    startApp();
}
///////////////////////////// Add new department records///////////////////////////////////
function addDepartment() {
    inquirer.prompt([
        {
            type: "input",
            message: "Please insert a new department",
            name: "dept"
        }]).then(function (data) {
            console.log(data.dept);
            const query = `INSERT INTO department SET name = "${data.dept}";`
            console.log(query)
            connection.query(query, (err, rows) => {
                if (err) throw err;
                console.log('Department inseted to database:');
                //console.table(rows);
                viewDepartment();
                startApp();
            });
        })
}
///////////////////////////// Update employee by role records///////////////////////////////////
// function updateRoles(){

//     inquirer.prompt([
//         {
//             type: "input",
//             message: "Please enter the role id",
//             name: "role"
//         }]).then(function(roledata) {
//             connection.query(`"UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";`)
//         })
// }