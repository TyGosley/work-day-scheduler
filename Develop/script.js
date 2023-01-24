var currentDayEl = $("#currentDay");
var saveBtn = $(".saveBtn");
var rightNow = dayjs().format('dddd, MMMM D, YYYY');


$(function () {

  function displayDate() {
    var rightNow = dayjs().format('dddd, MMMM D, YYYY');
    currentDayEl.text(rightNow);
  }

  function timeBlockColor() {

    var rightNowHour = dayjs().format("HH");
    $(".time-block").each(function () {
      var currentHour = parseInt($(this).attr("id"));

      if (currentHour > rightNowHour) {
        $(this).addClass("future");
      } else if (currentHour == rightNowHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("past");
      }
    })
  };

  saveBtn.on("click", function () {

    var time = $(this).siblings(".hour").text();
    var description = $(this).siblings(".description").val();

    localStorage.setItem(time, description);
  });

  function planner() {

    $(".hour").each(function () {
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















