const fs = require('fs');

const Init = () => {
    if(!fs.existsSync('employees.json')){
        fs.writeFileSync('employees.json', "{\"employees\": []}");
    }
}

const createEmployee = (employee, employeeObj) => {
    employeeObj.employees.push(employee);
    fs.writeFileSync('employees.json', JSON.stringify(employeeObj), 'utf-8', (err) => {
        if(err) console.log(err);
        else console.log('Employee created.')
    })
}

const deleteEmployee = (employeeName, employeeObj) => {
    employeeObj.employees
        .forEach((employee, index, arr) => {
            if(employee.name == employeeName){
                arr.splice(index,1);
            }
        })
    fs.writeFileSync('employees.json', JSON.stringify(employeeObj), 'utf-8', (err) => {
        if(err) console.log(err);
        else console.log('Employee deleted.')
    })
}

const readEmployee = (employee, employeeObj) => {
    let foundEmployee = employeeObj.employees
        .filter((employee) => employee.name == employeeName)
        console.log(`Name: ${foundEmployee.name} | Salary: ${foundEmployee.salary}`);
}

const readAllEmployees = (employeeObj) => {
    employeeObj.employees
        .map(employee => {
            console.log(`Name: ${employee.name} | Salary: ${employee.salary}`);
        })
    console.log();
}

const updateEmployee = (employeeName, newSalary, employeeObj) => {
    employeeObj.employees
        .forEach((employee, index, arr) => {
            if(employee.name == employeeName){
                arr[index].salary=newSalary;
            }
        })
    fs.writeFileSync('employees.json', JSON.stringify(employeeObj), 'utf-8', (err) => {
        if(err) console.log(err);
        else console.log('Employee updated.')
    })
}

module.exports = {Init, createEmployee, deleteEmployee, readEmployee, updateEmployee, readAllEmployees}
