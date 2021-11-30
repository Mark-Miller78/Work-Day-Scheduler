var currentDayEl = document.getElementById("currentDay")
var now = moment().format("dddd, MMMM DD, YYYY");
var containerEl = document.getElementById("schedule")

$(currentDayEl).text(now);

console.log(moment().hours());


