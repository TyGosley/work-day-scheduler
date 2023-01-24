// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var currentDayEl = $("#currentDay");
var saveBtn = $(".saveBtn");
var rightNow = dayjs().format('dddd, MMMM D, YYYY');


$(function () {

  function displayDate() {
    var rightNow = dayjs().format('dddd, MMMM D, YYYY');
    currentDayEl.text(rightNow);
  }

  function timeBlockColor() {
      

    $(".time-block").each(function() {
    var currentHour = parseInt($(this).attr("id"));

    if (currentHour > rightNow) {
      $(this).addClass("future");
    } else if (currentHour === rightNow) {
      $(this).addClass("present");
    } else {
      $(this).addClass("past");
    }
  })
  };

saveBtn.on("click", function() {

  var time = $(this).siblings(".hour").text();
  var description = $(this).siblings(".description").val;

  localStorage.setItem(time, description);
});

function planner() {

  $(".hour").each(function() {
    var currentHour = $(this).text();
    var currentPlan = localStorage.getItem(currentHour);

    if (currentPlan !== null) {
      $(this).siblings(".description").val(currentPlan);
    }
  });
}






  displayDate();
  timeBlockColor();
  planner();
});










