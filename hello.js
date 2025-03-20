const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const WORKING_DAYS_IN_MONTH = 20;

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
for (let day = 0; day < WORKING_DAYS_IN_MONTH; day++) {
    let empCheck = Math.floor(Math.random() * 3);
    let dailyWage = calculateDailyWage(empCheck);
    totalEmpWage += dailyWage;
}

console.log(`Total Employee Wage for ${WORKING_DAYS_IN_MONTH} days: $${totalEmpWage}`);
