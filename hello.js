const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;

let totalWage = 0;
let dailyWages = [];

function getWorkingHours() {
    let empCheck = Math.floor(Math.random() * 3);
    switch (empCheck) {
        case 0:
            return 0; // Absent
        case 1:
            return PART_TIME_HOURS; // Part time
        case 2:
            return FULL_TIME_HOURS; // Full time
    }
}

for (let day = 1; day <= NUM_OF_WORKING_DAYS; day++) {
    let dailyHours = getWorkingHours();
    let dailyWage = dailyHours * WAGE_PER_HOUR;
    dailyWages.push(dailyWage);
    totalWage += dailyWage;
}

console.log("Daily Wages: ", dailyWages);
console.log("Total Wage: ", totalWage);
