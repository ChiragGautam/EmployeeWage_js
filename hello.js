const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

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

const empCheck = Math.floor(Math.random() * 3);
const empWage = calculateDailyWage(empCheck);

console.log(`Employee worked for ${getWorkingHours(empCheck)} hours`);
console.log(`Daily Employee Wage: $${empWage}`);
