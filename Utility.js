module.exports = { computeEmpWage }

const empRatePerHrs = 20;
const daysPerMonth = 20;
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
function computeEmpWage() {
    let totalWage = 0,
        dayCount = 1;
    while (dayCount <= daysPerMonth) {
        totalWage += empRatePerHrs * getWorkHrs();
        dayCount++;
    }
    return totalWage;
}
