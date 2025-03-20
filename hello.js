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

const empCheck = Math.floor(Math.random() * 3); // 0, 1, 2
const empHours = getWorkingHours(empCheck);
const empWage = empHours * WAGE_PER_HOUR;

console.log(`Employee worked for ${empHours} hours`);
console.log(`Daily Employee Wage: $${empWage}`);
