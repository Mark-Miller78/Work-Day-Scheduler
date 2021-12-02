var currentDayEl = document.getElementById("currentDay")
var now = moment().format("dddd, MMMM DD, YYYY");
var containerEl = document.getElementById("schedule")

$(currentDayEl).text(now);

$(".saveBtn").on("click", function(){
    var text = $(this).siblings(".description").val();
    var hour = $(this).parent().attr("id");
    console.log(hour, text);

    localStorage.setItem(hour, text);
});

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
