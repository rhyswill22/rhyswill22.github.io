// 1. Create JSON for each employee with the following details (first name, department, designation, salary, raise eligible)
// Sam, Tech, Manager, 40000, true
// Mary, Finance, Trainee, 18500, true
// Bill, HR, Executive, 21200, false


const employees = [

    { firstName: 'Sam', department: 'Tech', designation: 'Manager', salary: 40000, raiseEligible: true },
    { firstName: 'Mary', department: 'Finance', designation: 'Trainee', salary: 18500, raiseEligible: true },
    { firstName: 'Bill', department: 'HR', designation: 'Executive', salary: 21200, raiseEligible: false }

];


console.log("Problem 1:", employees);

// 2.  Create JSON for the company with the following details (companyName, website, employees)

const company = {
    companyName: 'Tech Stars',
    website: 'www.techstars.site',
    employees: employees
};
console.log("Problem 2:", company);

// 3. A new employee has joined the company. Update the JSON from problems 1 and 2 to reflect the addition of:
// Anna, Tech, Executive, 25600, false
const newEmployee = { firstName: 'Anna', department: 'Tech', designation: 'Executive', salary: 25600, raiseEligible: false };

company.employees.push(newEmployee);

console.log("Problem 3:", company);

// 4. Given the JSON for the company, calculate the total salary for all company employees.
let totalSalary = 0;


company.employees.forEach(employee => {
    totalSalary += employee.salary;
});


console.log("Problem 4: Total Salary =", totalSalary);

// 5. It's raise time. If an employee is raise eligible, increase their salary by 10%. Given the JSON of the company and its employees, write a function to update the salary for each employee who is raised eligible, then set their eligibility to false.

company.employees.forEach(employee => {
    if (employee.raiseEligible) {
        employee.salary *= 1.10;
        employee.raiseEligible = false;
    }
});
console.log("Problem 5:", company);


// 6. Some employees have decided to work from home. The following array indicates who is working from home. Use the array to update the company JSON. For each employee, add another property called 'wfh' and set it to true or false
// Working from home: ['Anna', 'Sam']

const workingFromHome = ['Anna', 'Sam'];


company.employees.forEach(employee =>
{
    employee.wfh = workingFromHome.includes(employee.firstName);
});

console.log("Problem 6:", company);
