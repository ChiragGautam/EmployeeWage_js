const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;

function getWorkingHours(empCheck) {
    switch (empCheck) {
        case 0:
            return 0;
        case 1:
            return PART_TIME_HOURS;
        case 2:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

function calculateDailyWage(empCheck) {
    let empHours = getWorkingHours(empCheck);
    return empHours * WAGE_PER_HOUR;
}

let totalEmpWage = 0;
let totalWorkingDays = 0;
let totalEmpHours = 0;

while (totalWorkingDays < MAX_WORKING_DAYS && totalEmpHours < MAX_WORKING_HOURS) {
    let empCheck = Math.floor(Math.random() * 3);
    let empHours = getWorkingHours(empCheck);
    totalEmpHours += empHours;
    totalEmpWage += calculateDailyWage(empCheck);
    totalWorkingDays++;
}

console.log(`Total Employee Wage: $${totalEmpWage}`);
console.log(`Total Working Days: ${totalWorkingDays}`);
console.log(`Total Working Hours: ${totalEmpHours}`);
