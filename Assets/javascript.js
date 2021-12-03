var currentDayEl = document.getElementById("currentDay")
var now = moment().format("dddd, MMMM DD, YYYY");
var containerEl = document.getElementById("schedule")

//Sets current date in header
$(currentDayEl).text(now);

//when a save button is clicked...
$(".saveBtn").on("click", function(){
    //...gets the input val associated with it and the id of the hour
    var text = $(this).siblings(".description").val();
    var hour = $(this).parent().attr("id");
    // console.log(hour, text);

    //saves to local hour
    localStorage.setItem(hour, text);
});

var getItem = function(){
    //for each textarea...
    $(".description").each(function(){
        //sets id to the id attribute of parent element 
        var id = $(this).parent(".time-block").attr("id");
        //sets value to value based of keyname
        var value = localStorage.getItem(id);

        //sets value to what is pulled from local storage
        $(this).val(value);
        // console.log(id);
    });
};

//when delete button is pressed
$(".deleteBtn").on("click", function(){
    //sets textarea value to ""
    var text = $(this).siblings(".description");
    text.val("");

    //removes from localstorage based on ID
    var id = $(this).parent(".time-block").attr("id");
    localStorage.removeItem(id);

});

var hourTracker = function(){
    //sets rightNow to current hour
    var rightNow = moment().hour();

    //for each div element with time-block class..
    $(".time-block").each(function(){
        //...grabs the id as an integer...
        var scheduleHour = parseInt($(this).attr("id"));
    
        //...and sets className based if in the past, present, or future
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
getItem();
