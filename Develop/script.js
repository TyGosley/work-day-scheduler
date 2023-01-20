// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.


});
function displayTimeBlocks() {
  var workHours = [
    {
      hour: 9,
      displayHour: "9AM"

    },
    {
      hour: 10,
      displayHour: "10AM"

    },
    {
      hour: 11,
      displayHour: "11AM"

    },
    {
      hour: 12,
      displayHour: "12PM"

    },
    {
      hour: 1,
      displayHour: "1PM"
      
    },
    {
      hour: 2,
      displayHour: "2PM"
      
    },
    {
      hour: 3,
      displayHour: "3PM"
      
    },
    {
      hour: 4,
      displayHour: "4PM"
      
    },
    {
      hour: 5,
      displayHour: "5PM"

    },
    
  ]

  var timeBlockHtml = ""
  for (var i = 0; i < workHours.length; i++) {
    var currentBlock = workHours[i];

   var  currentHour = 9;

   var classHour = "present"

   if(currentBlock.hour < currentHour){
    classHour = "past"
   }else if(currentBlock.hour > currentHour){
    classHour = "future"
   }

    timeBlockHtml += `
    <div id="hour-${currentBlock.hour}" class="row time-block">
        <div class="col-2 col-md-1 hour text-center py-3">${currentBlock.displayHour}</div>
        <textarea id="text-${currentBlock.hour}" class=" ${classHour} col-8 col-md-10 description" rows="3"> </textarea>
        <button class="btn saveBtn col-2 col-md-1" data-hour="${currentBlock.hour}" aria-label="save">
          <i class="fas fa-save" aria-hidden="true"></i>
        </button>
      </div>
    `
  }

  $("#time-block-container").html(timeBlockHtml)
}