module.exports = { computeEmpWage }

// constant variables
const empRatePerHrs = 20;
const daysPerMonth = 20;
const maxWorkingHrs = 100;

// To get employee wage per month
function getWorkHrs() {
    let randomValue = Math.floor(Math.random() * 10) % 3;
    for (let i = 0; i < daysPerMonth; i++) {
        switch (randomValue) {
            case 1:
                empHrs = 8;
                return empRatePerHrs * empHrs;
            case 2:
                empHrs = 4;
                return empRatePerHrs * empHrs;
            default:
                empHrs = 0;
                return empRatePerHrs * empHrs;
        }

    }
}

//To compute total employee wage 
function computeEmpWage() {

    // local variables
    let totalWage = 0,
        dayCount = 1;
    let totalWorkingHrs = 0;
    while (dayCount <= daysPerMonth || totalWorkingHrs == maxWorkingHrs) {
        totalWage += empRatePerHrs * getWorkHrs();
        dayCount++;
    }
    return totalWage;
}
