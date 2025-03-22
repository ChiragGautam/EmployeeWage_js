const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;

let dayWiseWageMap = new Map(); // Day wise wage ke liye Map
let totalWorkingDays = 0;

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

// ✅ Daily Wage and Total Working Days ko Store karna
for (let day = 1; day <= NUM_OF_WORKING_DAYS; day++) {
    let dailyHours = getWorkingHours();
    let dailyWage = dailyHours * WAGE_PER_HOUR;

    if (dailyHours > 0) totalWorkingDays++; // Absent ko count nahi karna
    dayWiseWageMap.set(day, dailyWage);
}

// ✅ Total Wage using Map
let totalWageFromMap = Array.from(dayWiseWageMap.values()).reduce((total, wage) => total + wage, 0);

// ✅ Output:
console.log("Day Wise Wage in Map:");
for (let [day, wage] of dayWiseWageMap) {
    console.log(`Day ${day} -> $${wage}`);
}

console.log("\nTotal Wage from Map: $", totalWageFromMap);
console.log("Total Working Days: ", totalWorkingDays);


// UC10 - Create Object to store all employee details
let empDetails = {
    totalWorkingDays: totalWorkingDays,
    totalEmpHrs: totalEmpHrs,
    totalEmpWage: totalSalary,
    dailyHrsAndWageArr: empDailyHrsAndWageArr,
    toString() {
        return `\nTotal Days: ${this.totalWorkingDays}, Total Hours: ${this.totalEmpHrs}, Total Wage: ${this.totalEmpWage}\n` +
            this.dailyHrsAndWageArr.map(dailyData => dailyData.toString()).join('');
    }
};

console.log("UC10 - Showing Complete Employee Details: " + empDetails.toString());
