// Problem 1
const employees = [
    { firstName: 'Sam', department: 'Tech', designation: 'Manager', salary: 40000, raiseEligible: true },
    { firstName: 'Mary', department: 'Finance', designation: 'Trainee', salary: 18500, raiseEligible: true },
    { firstName: 'Bill', department: 'HR', designation: 'Executive', salary: 21200, raiseEligible: false }
];
console.log("Problem 1:", employees);

// Problem 2: Create JSON for the company
const company = {
    companyName: 'Tech Stars',
    website: 'www.techstars.site',
    employees: employees
};
console.log("Problem 2:", company);

// Problem 3: Add a new employee
const newEmployee = { firstName: 'Anna', department: 'Tech', designation: 'Executive', salary: 25600, raiseEligible: false };
company.employees.push(newEmployee);
console.log("Problem 3:", company);

// Problem 4: Calculate total salary
let totalSalary = 0;
company.employees.forEach(employee => {
    totalSalary += employee.salary;
});
console.log("Problem 4: Total Salary =", totalSalary);

// Problem 5: Update salaries for raise eligible employees
company.employees.forEach(employee => {
    if (employee.raiseEligible) {
        employee.salary *= 1.10;
        employee.raiseEligible = false;
    }
});
console.log("Problem 5:", company);

// Problem 6: Update work from home status
const workingFromHome = ['Anna', 'Sam'];
company.employees.forEach(employee => {
    employee.wfh = workingFromHome.includes(employee.firstName);
});
console.log("Problem 6:", company);
