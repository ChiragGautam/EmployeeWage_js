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

// (a) Total Wage using forEach or reduce
let totalWageUsingReduce = dailyWages.reduce((total, wage) => total + wage, 0);
console.log("Total Wage using reduce: ", totalWageUsingReduce);

// (b) Day with Daily Wage using map
let dayWithWage = dailyWages.map((wage, index) => `Day ${index + 1}: $${wage}`);
console.log("Day with Wage: ", dayWithWage);

// (c) Days when Full Time Wage of 160 was earned using filter
let fullTimeDays = dailyWages
    .map((wage, index) => (wage === FULL_TIME_HOURS * WAGE_PER_HOUR ? index + 1 : -1))
    .filter(day => day !== -1);
console.log("Full Time Wage Days: ", fullTimeDays);

// (d) First Occurrence when Full Time Wage was earned using find
let firstFullTimeDay = dailyWages.find(wage => wage === FULL_TIME_HOURS * WAGE_PER_HOUR);
console.log("First Full Time Wage Earned: $", firstFullTimeDay);

// (e) Check if Every Element is Full Time Wage using every
let allFullTime = dailyWages.every(wage => wage === FULL_TIME_HOURS * WAGE_PER_HOUR);
console.log("Is Every Element Full Time Wage?: ", allFullTime);

// (f) Check if there is any Part Time Wage using some
let anyPartTime = dailyWages.some(wage => wage === PART_TIME_HOURS * WAGE_PER_HOUR);
console.log("Is There Any Part Time Wage?: ", anyPartTime);

// (g) Find the Number of Days Employee Worked
let daysWorked = dailyWages.filter(wage => wage > 0).length;
console.log("Number of Days Worked: ", daysWorked);
