module.exports = { attendance }
function attendance() {
    let isFullTime = 1;
    let randomValue = Math.floor(Math.random() * 10) % 2;
    if (randomValue == isFullTime)
        return true;

    else
        return false;
}

