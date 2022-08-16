const employee = require('./employeeModule');
const fs = require('fs');
employee.init();
const getData = () => {
    return fs.readFileSync('employees.json','utf-8', (err, data) => {
        if(err) 
            console.log(err);
        else{
            return data 
        }
    })
}

var employeeObj = JSON.parse(getData());

console.log("Adding employees... ");
employee.createEmployee({"name": "Employee 1 Name", "salary": 2000}, employeeObj)
employee.createEmployee({"name": "Employee 2 Name", "salary": 4000}, employeeObj)
employeeObj = JSON.parse(getData());

console.log("Employee database: ");
employee.readAllEmployees(employeeObj);

console.log("Updating an employee... ");
employee.updateEmployee("Employee 1 Name", 3000, employeeObj)
employeeObj = JSON.parse(getData());

console.log("Employee database: ");
employee.readAllEmployees(employeeObj);

console.log("Deleting an employee... ");
employee.deleteEmployee("Employee 2 Name", employeeObj);
employeeObj = JSON.parse(getData());

console.log("Employee database: ");
employee.readAllEmployees(employeeObj);

console.log("Deleting the json file... ");
fs.rmSync('employees.json');
