// $(document).ready(function () {
//    // listen for save button clicks
//    hourUpdater();
//    document.getElementsByClassName('saveBtn').onclick = function () {
//       // get nearby values
//       var id_hour = document.getElementsByClassName('time-block')
      
//       var matches = id_hour.match(/(\d+)/);
//       if (matches) {
//          document.getElementById('currentHour').innerHTML
//             = matches[0];
        
//          current_hour = matches[0];
//       }
//       var value = $(this).siblings('.description').val();
//       var time = $(this).parent().attr('id');
      
//       alert("This is the alert: " + value);
   
//    };
 
//    function hourUpdater() {
//       // get current number of hours
   
//       var current_hour = 0;
//       var today = new Date();
//       var currentday = today.toDateString();
      
//       var currentTime = today.toLocaleTimeString();
//       document.getElementById("currentTime").innerHTML = currentTime;
//    }
// }    

$(document).ready(function () {


   function hourUpdater() {
         // get current number of hours
         
         var today = new Date();
         //var currentday = today.toDateString();
            
         var currentTime = today.toLocaleString();
         document.getElementById("currentTime").innerHTML = currentTime;
   }
   
   hourUpdater();

   $("button").click(function () {

   //var value = $(this).siblings('.description').val();
     
    //var time = $(this).parent().attr('id');

    //alert(time);
    // save in localStorage
    //localStorage.setItem(time, value);
      //   $("p").hide();
         
         //Setting the time
         var current = new Date();
         var hours = parseInt(current.getHours());
         alert("Hours --> " + hours);
         var time = $(this).parent().attr('id');
         var matches = time.match(/(\d+)/);
         if (matches) {
            document.getElementById('currentHour').innerHTML
               = matches[0];
           
            current_hour = parseInt(matches[0]);
         }
      
      
      var value = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');
    //alert("value -->" + value + " time -> " + time);
    
    // save in localStorage
    localStorage.setItem(time, value);

    // Show notification that item was saved to localStorage by adding class 'show'
    $('.notification').addClass('show');
    alert("Hours is " + hours + " current is " + current_hour);
      if (current_hour === hours) {
         $(this).addClass('past');
         alert("Applied!!!");
      }
      
      // $('.time-block').each(function () {
      //    var blockHour = parseInt($(this).attr('id').split('-')[1]);
      //    alert("blockhour ->" + blockHour + "current_hour ->" + current_hour );
   
      //    // check if we've moved past this time
      //    if (blockHour < current_hour) {
      //      $(this).addClass('past');
      //    } else if (blockHour === current_hour) {
      //      $(this).removeClass('past');
      //      $(this).addClass('present');
      //    } else {
      //      $(this).removeClass('past');
      //      $(this).removeClass('present');
      //      $(this).addClass('future');
      //    }
      //  });
   
         
   });


   
$('#hour-9 .description').val(localStorage.getItem('hour-5'));
  $('#hour-10 .description').val(localStorage.getItem('hour-6'));
  $('#hour-11 .description').val(localStorage.getItem('hour-7'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));

});
