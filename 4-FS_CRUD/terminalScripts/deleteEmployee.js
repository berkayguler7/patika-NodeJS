const fs = require('fs');
const employeeObj = require('../employees.json');
const arguments = process.argv.slice(2);

const deleteEmployee = (employeeName) => {
    employeeObj.employees
        .forEach((employee, index, arr) => {
            if(employee.name == employeeName){
                arr.splice(index,1);
            }
        })
    console.log(employeeObj.employees)
    fs.writeFile('employees.json', JSON.stringify(employeeObj), 'utf-8', (err) => {
        if(err) console.log(err);
        else console.log('Employee deleted.')
    })
}

deleteEmployee(arguments[0]);
