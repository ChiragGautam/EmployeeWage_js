const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;

let dailyWageMap = new Map();

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
    dailyWageMap.set(day, dailyWage);
}

// ✅ (a) Total Wage using Map
let totalWageFromMap = Array.from(dailyWageMap.values()).reduce((total, wage) => total + wage, 0);
console.log("Total Wage using Map: ", totalWageFromMap);

// ✅ (b) Day wise wage stored in Map
console.log("Day Wise Wage:");
for (let [day, wage] of dailyWageMap) {
    console.log(`Day ${day} -> $${wage}`);
}
