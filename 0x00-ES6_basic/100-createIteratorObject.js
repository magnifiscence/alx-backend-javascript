export default function createIteratorObject(report) {
    let departments = Object.keys(report);

    let currentDepartmentIndex = 0;
    let currentEmployeeIndex = 0;

    return {
        next: function() {
            if (currentDepartmentIndex < departments.length) {
                let department = departments[currentDepartmentIndex];
                let employees = report[department].employees;

                if (currentEmployeeIndex < employees.length) {
                    let employee = employees[currentEmployeeIndex];
                    currentEmployeeIndex++;
                    return { value: employee, done: false };
                } else {
                    currentDepartmentIndex++;
                    currentEmployeeIndex = 0;
                    return this.next();
                }
            } else {
                return { done: true };
            }
        }
    };
}

