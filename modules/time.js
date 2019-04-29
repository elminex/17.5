function getTime(sec) {
    let days = Math.floor(((sec / 60) / 60) / 24);
    let hours = Math.floor(((sec / 60) / 60) % 24);
    let minutes = Math.floor((sec / 60) % 60);
    let seconds = Math.floor(sec % 60);
    let time = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
    return time;
}
exports.print = getTime;