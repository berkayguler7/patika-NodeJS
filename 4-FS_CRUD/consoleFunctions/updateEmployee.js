const fs = require('fs');
const employeeObj = require('../employees.json');
const arguments = process.argv.slice(2);

const updateEmployee = (employeeName, newSalary) => {
    employeeObj.employees
        .forEach((employee, index, arr) => {
            if(employee.name == employeeName){
                arr[index].salary=newSalary;
            }
        })
    console.log(employeeObj.employees)
    fs.writeFile('employees.json', JSON.stringify(employeeObj), 'utf-8', (err) => {
        if(err) console.log(err);
        else console.log('Employee updated.')
    })
}

updateEmployee(arguments[0], arguments[1]);
