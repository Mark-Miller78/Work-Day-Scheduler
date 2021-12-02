var currentDayEl = document.getElementById("currentDay")
var now = moment().format("dddd, MMMM DD, YYYY");
var containerEl = document.getElementById("schedule")

$(currentDayEl).text(now);



var hourTracker = function(){
    var rightNow = moment().hour();

    $(".time-block").each(function(){
        var scheduleHour = parseInt($(this).attr("id"));
        
        if(scheduleHour < rightNow){
            $(this)
            .addClass("past")
            .removeClass("present")
            .removeClass("future");

        } else if(scheduleHour == rightNow){
            $(this)
            .addClass("present")
            .removeClass("future")
            .removeClass("past");

        } else{
            $(this)
            .addClass("future")
            .removeClass("present")
            .removeClass("past");
        }
    });
};
hourTracker();
