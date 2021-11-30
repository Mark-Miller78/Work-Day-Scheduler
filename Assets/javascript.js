var currentDayEl = document.getElementById("currentDay")
var now = moment().year(year).month(month).date(day);
var containerEl = document.getElementById("scheduleContainer")

function currentDate(){
    $(currentDayEl).text(now);
}

currentDate();