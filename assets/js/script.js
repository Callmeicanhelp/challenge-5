// Display today's day and date
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);


$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // Get nearby values of the textarea in JQuery
        var text = $(this).siblings(".textarea").val();
        var time = $(this).siblings(".hour").val();
        // var tasks = [time + text];
        // tasks [0] = time + text;
        // var array = [9, 10, 11, 12, 1, 2, 3, 4, 5 ];
        // localStorage.setItem('myArray', JSON.stringify(array));
        localStorage.setItem(time, JSON.stringify(text));
        // var storedTasks = JSON.parse(localStorage.getItem("tasks"));
        // storedTasks()
        
    })

    // Storage.prototype.getArray = function(arrayTasks) {
    //     var taskArray = [];
    //     var fetchArrayObject = this.getItem(arrayTasks);
    //     if (typeof fetchArrayObject !== 'undefined') {
    //       if (fetchArrayObject !== null) { taskArray = JSON.parse(fetchArrayObject); }
    //     }
    //     return taskArray;
    //   }
      
    //   Storage.prototype.pushArrayItem = function(arrayTasks,arrayItem) {
    //     var existingArray = this.getArray(arrayTasks);
    //     existingArray.push(arrayItem);
    //     this.setItem(arrayTasks,JSON.stringify(existingArray));
    //   }
      
   
    function timeTracker() {
        // get current number of hours.
        var timeNow = moment().hour();

        // loop over time blocks
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            // To check the time and add the classes for background indicators
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    // Get item from local storage if any
    // $("#9am .textarea").val(localStorage.getItem("9am"));
    // $("#10am .textarea").val(localStorage.getItem("10am"));
    // $("#11am .textarea").val(localStorage.getItem("11am"));
    // $("#12pm .textarea").val(localStorage.getItem("12pm"));
    // $("#1pm .textarea").val(localStorage.getItem("1pm"));
    // $("#2pm .textarea").val(localStorage.getItem("2pm"));
    // $("#3pm .textarea").val(localStorage.getItem("3pm"));
    // $("#4pm .textarea").val(localStorage.getItem("4pm"));
    // $("#5pm .textarea").val(localStorage.getItem("5pm"));

    timeTracker();

    // var loadTasks = function() {
    
    //     var loadedTasks = localStorage.getItem("tasks");
    //     var loadedTasks = JSON.parse(loadedTasks);
        
    //     console.log(loadedTasks)
    
    //     for (var i = 0; i < loadedTasks.length; i++) {
    //         var text= loadedTasks[i].task
    //         console.log(text)
    //         var time = loadedTasks[i].part
    //         $("#task"+ time).text(text)
    //     }    
    // }
    
    // loadTasks()
    
})