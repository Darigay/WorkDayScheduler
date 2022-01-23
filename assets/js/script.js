//  todays date from moment library

const toDate = new Date();
document.getElementById("currentDay").innerHTML = moment().format('LLLL');

//var currentHour = toDate.getHours();


// save into local storage

// function to update hours 

// iterate over hourly timeblocks 

// if-else statement - for pass present and future

// set local storage for getItems for hour timeblocks



function colorBlocks() {

    var currentHour = moment().hour();

    $(".time-block").each(function () {

        var colorBlock = $(this).attr("id");

        //console.log(colorBlock);

        // task bar to color grey - past time frame 

        if (colorBlock < currentHour) {

            // $(this).css("background-color","red");
            // $(".time-block").addclass("past");

            $(this).addClass("past");
        }

        //task bar to color red -present time frame

        else if (colorBlock == currentHour) {
            // $(this).css("background-color","red");
            //$(".time-block").addclass("present");

            $(this).addClass("present");
        }

        // task bar to turn green for future time frame
        else {

            // $(".time-block").addclass("future");
            //$(this).css("background-color","green");
            $(this).addClass("future");

        }

    });
}

colorBlocks();

// Save Buttons to save in local storage

$(".saveBtn").on("click", function () {

    var task = $(this).parent().attr("id");
    var taskInfo = $(this).siblings(".text").val();
    console.log(taskInfo);
    localStorage.setItem(task, taskInfo);

})


// function for storage Information
function getTaskInfo() {


    for (var i = 9; i < 18; i++) {
        var storageInfo = localStorage.getItem(i);
        $("#" + i).children(".text").val(storageInfo);

    }

}

getTaskInfo();