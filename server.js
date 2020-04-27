var mysql = require("mysql");
const inquirer = require("inquirer");
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
            choices: ["addDepartment",
                "addRoles",
                "addEmployee",
                "viewDepartment",
                "viewRoles",
                "viewEmployee",
                "updateRoles",
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
            case "updateRoles":
                return updateRoles();
            default:
                return exit();
        }

    });
}

function exit() {
    console.log("end connection");
    connection.end();
}

function viewDepartment() {
    const query = `SELECT *  FROM department ;`
    connection.query(query, (err, rows) => {
        if (err) throw err;

        console.log('Data received from Db:');
        console.table(rows);
    });
    startApp();
}

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

function updateRoles(){

    inquirer.prompt([
        {
            type: "input",
            message: "Please enter the role id",
            name: "role"
        }]).then(roledata=> {
            connection.query(`ÛPDATE employee`)
        })
}