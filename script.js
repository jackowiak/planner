// add new task to list
function addElement() {
    var addTask = $("#task-description").val();
    if (addTask != 0) {
            $(".remaining-tasks-list").append("<li><div class='task-to-do'>" + addTask + "</div><div class='btn-tasks'><button class='delete'><i class='icon-trash-empty'></i></button><button class='completed'><i class='icon-circle-empty'></i></button></div></li>");
        
            $("#task-description").val("");
        
        var newTotalCounter = parseInt($(".total-counter").text());
        
        if (newTotalCounter < 50) {
            newTotalCounter += 1;
            $(".total-counter").text(newTotalCounter);
            $("#remaining-tasks")
                .animate({opacity: 0.8}, "fast")
                .animate({opacity: 1}, "fast");
        }
    }    
}

$("#btn-add-task").click(addElement);

// onkey event - add new task by pressing 'enter'
$("#task-description").keydown(function(e) {
    if (e.keyCode == "13") {
        addElement();
    }
});

// delete task
$(document).on("click", ".delete", function() {    
    if ($(this).parent().parent().parent().hasClass("remaining-tasks-list")) {
        var newTotalCounter = parseInt($(".total-counter").text());
        if (newTotalCounter > 0) {
            newTotalCounter -= 1;
            $(".total-counter").text(newTotalCounter);
            $("#remaining-tasks")
                .animate({opacity: 0.8}, "fast")
                .animate({opacity: 1}, "fast");
        }        
    }
    
    $(this).parent().parent().remove();    
})


// mark task as completed
$(document).on("click", ".completed", function() {
    $(this).html("<i class='icon-dot-circled'></i>");
    var completedElement = $(this).parent().parent();
    $(".completed-tasks-list").append(completedElement);
    $(this).prop('disabled', true);
    
    var newCompletedCounter = parseInt($(".completed-counter").text());
    
    if (newCompletedCounter < 50) {
        newCompletedCounter += 1;
        $(".completed-counter").text(newCompletedCounter);
        $("#completed-tasks")
            .animate({opacity: 0.8}, "fast")
            .animate({opacity: 1}, "fast");
    }
    
    var newTotalCounter = parseInt($(".total-counter").text());
    
    if (newTotalCounter > 0) {
        newTotalCounter -= 1;
        $(".total-counter").text(newTotalCounter);
        $("#remaining-tasks")
            .animate({opacity: 0.8}, "fast")
            .animate({opacity: 1}, "fast");
    }
})


// sort by remaining
$(".task-sort-remaining").click(function() {
    $(".completed-tasks-list").css("display", "none");
    $(".remaining-tasks-list").css("display", "block");
    $(".task-sort-remaining").css("background-color", "#FF0000");
    $(".task-sort-completed").css("background-color", "#3232ff");
    $(".task-sort-all").css("background-color", "#3232ff");
})

// sort by completed
$(".task-sort-completed").click(function() {
    $(".remaining-tasks-list").css("display", "none");
    $(".completed-tasks-list").css("display", "block");
    $(".task-sort-remaining").css("background-color", "#3232ff");
    $(".task-sort-completed").css("background-color", "#FF0000");
    $(".task-sort-all").css("background-color", "#3232ff");
})

// show everything
$(".task-sort-all").click(function() {
    $(".remaining-tasks-list").css("display", "block");
    $(".completed-tasks-list").css("display", "block");
    $(".task-sort-remaining").css("background-color", "#3232ff");
    $(".task-sort-completed").css("background-color", "#3232ff");
    $(".task-sort-all").css("background-color", "#FF0000");
})

// date
var time = new Date();
var date = time.getDate();
var day = time.getDay();
var month = time.getMonth() + 1;
var year = time.getFullYear();
var dayName = "";

switch(day) {
    case 0:
        dayName = "Sunday";
        break;
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednsday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";        
}

if (date < 10) {
    date = "0" + date;
}

if (month < 10) {
    month = "0" + month;
}

var showDate = dayName + ', ' + date + '/' + month + '/' + year;

$("#date").text(showDate);
