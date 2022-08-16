const fs = require('fs');
const arguments = process.argv.slice(2);
const employeeObj = require('../employees.json');

const createEmployee = (employee) => {
    if(employeeObj.employees) {
        employeeObj.employees.push(employee);
        fs.writeFile('employees.json', JSON.stringify(employeeObj), 'utf-8', (err) => {
            if(err) console.log(err);
            else console.log('Employee created.')
        })
    }
    else {
        fs.writeFile('employees.json', JSON.stringify(employee), 'utf-8', (err) => {
            if(err) console.log(err);
            else console.log('Employee created.')
        })
    }
}

createEmployee({name: arguments[0], salary: arguments[1]*1});
