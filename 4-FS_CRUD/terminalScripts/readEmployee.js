const fs = require('fs');
const employeeObj = require('../employees.json');

const readEmployee = () => {
    employeeObj.employees.map((employee) => {
        console.log(`Name: ${employee.name} | Salary: ${employee.salary}`);
    })
}

readEmployee();
