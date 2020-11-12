module.exports = { empWage }
function empWage() {
    let isFullTime = 1;
    let empRatePerHrs = 20;
    let randomValue = Math.floor(Math.random() * 10) % 2;
    if (randomValue == isFullTime) {
        empHrs = 8;
        return empRatePerHrs * empHrs;
    }
    else {
        empHrs = 0;
        return empRatePerHrs * empHrs;
    }
}
empWage();
