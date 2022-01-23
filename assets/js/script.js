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

    $(".time-block").each(function(){

        var colorBlock = $(this).attr("id");

        //colorBlock = parseInt(colorBlock[1]);
        console.log(colorBlock);


       
       if (colorBlock < currentHour) 
        {  
            
           // $(this).css("background-color","red");
 
           // $(".time-block").addclass("past");

           $(this).addClass("past");
            
       }

       else if (colorBlock == currentHour) 
        { 
           // $(this).css("background-color","red");
           //$(".time-block").addclass("present");
           $(this).addClass("present");
         }
//
        else {

           // $(".time-block").addclass("future");
            //$(this).css("background-color","green");
            $(this).addClass("future");

        }

    });
}

colorBlocks();

// Save Buttons 

$(".saveBtn").on("click",function(){

    var task = $(this).parent().attr("id");
    var taskInfo = $(this).siblings(".text").val();
    console.log(taskInfo);
    localStorage.setItem (task, taskInfo);

})


// function 

function getTaskInfo () {


   for ( var i=9; i<18 ; i++) 
   {
     var storageInfo = localStorage.getItem(i);
     $("#" + i).children(".text").val(storageInfo);

   }
   
}

getTaskInfo();