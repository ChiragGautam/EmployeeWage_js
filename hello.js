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


// UC 10A to UC 11D Using Object Functions along with Arrow Functions
let totalWages = empDailyHrsAndWageArr
    .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
    .reduce((totalWage, dailyHrsAndWage) => totalWage + dailyHrsAndWage.dailyWage, 0);

totalHours = empDailyHrsAndWageArr
    .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
    .reduce((totalHours, dailyHrsAndWage) => totalHours + dailyHrsAndWage.dailyHours, 0);

console.log("UC 11A Total Hours: " + totalHours + " Total Wages: " + totalWages);

console.log("UC 11B Logging Full Work Days");
empDailyHrsAndWageArr
    .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8)
    .forEach(dailyHrsAndWage => console.log(dailyHrsAndWage.toString()));

let partWorkingDayStrArr = empDailyHrsAndWageArr
    .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 4)
    .map(dailyHrsAndWage => dailyHrsAndWage.toString());

console.log("\nUC 11C PartWorkingDayStrings: " + partWorkingDayStrArr);

let nonWorkingDayNums = empDailyHrsAndWageArr
    .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 0)
    .map(dailyHrsAndWage => dailyHrsAndWage.dayNum);

console.log("UC 11D NonWorkingDayNums: " + nonWorkingDayNums);