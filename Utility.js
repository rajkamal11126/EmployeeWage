module.exports = { empWage }
function empWage() {
    const isFullTime = 1;
    const isPartTime = 2;
    const empRatePerHrs = 20;
    let randomValue = Math.floor(Math.random() * 10) % 3;
    if (randomValue == isFullTime) {
        empHrs = 8;
        return empRatePerHrs * empHrs;
    }
    else if(randomValue == isPartTime) {
        empHrs = 4;
        return empRatePerHrs * empHrs;
    }
    else {
        empHrs = 0;
        return empRatePerHrs * empHrs;
    }
}
empWage();
