module.exports = { empWage }
function empWage() {
    const isFullTime = 1;
    const isPartTime = 2;
    const empRatePerHrs = 20;
    let randomValue = Math.floor(Math.random() * 10) % 3;
    switch(randomValue) {
        case 1:
            empHrs = 8;
            return empRatePerHrs * empHrs;     
        case 2:
            empHrs = 4;
            return empRatePerHrs * empHrs;
        default:
          return 0;
    }
}
