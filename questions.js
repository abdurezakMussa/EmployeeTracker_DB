
const actions = [

    {
        type: "list",
        name: "actions",
        message: "What would you like to to?",
        choices: [

            "Add New Employee",
            "View All Employees",
            "Add Role",
            "Update Role",
            "View All Roles",
            "Add Department",
            "View All Departments",
            "Exit"

        ]

    }
]



module.exports = { actions }
/*function addEmployee() {
    let roleArr=[];
    let managerArr=[];
    
    const query = `SELECT *  FROM role ;`
    connection.query(query, (err, rows) => {
        if (err) throw err;
        console.log('Data received from Db:');
        //console.table(rows);
        const roleTitles = rows.map(title => title.title)
        console.log(roleTitles);
   /////////////////////To get  manager employee//////////////////
        const employeeQuery = `SELECT *  FROM employee ;`
        connection.query(employeeQuery, (err, employeeResult) => {
            if (err) throw err;
           // console.table(employeeResult);
            const manager = employeeResult.map(({first_name,last_name}) => ({
                name: `${first_name} ${last_name}`
             }))
             console.log("manager name: " + manager)
        inquirer.prompt([
            {
                type: "input",
                message: "Please enter first name ",
                name: "fname"
            },
            {
                type: "input",
                message: "Please enter last name ",
                name: "lname"
            },
            {
                type: "list",
                message: "Please choose a role",
                choices: roleTitles,
                name:"roleTitles"
            },
            {
                type: "list",
                message: "Please choose a manager",
                choices: manager,
                name:"manager"
            }

        ]).then(function (data) {
                console.log(data.name)
                const queryemp=`INSERT INTO employee (first_name, last_name, role_id, manager_id) 
                values"${data.fname},${data.lname},${data.roleTitles},${data.manager};" `
                
                // const queryemp=`INSERT INTO employee SET name ="${data.fname},${data.lname},${data.roleTitles},${data.manager};"`
                // console.log(queryemp);
                // connection.query(queryemp,[[[[first_name,last_name,roleTitles,manager_id]]]],(err,rows)=>{
                    if (err) throw err;
                    console.log("successfully register");
                    viewEmployee();
                    startApp();
                })
            })

        })
    });

}*/