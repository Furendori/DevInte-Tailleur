$(document).ready(function () {
  $(".burger").click(function () {
    $(".menunav").toggleClass("open");
    $(".burger").toggleClass("hidden");
    $(".cross").toggleClass("hidden");
  });
});

$(document).ready(function () {
  $(".cross").click(function () {
    $(".menunav").toggleClass("open");
    $(".burger").toggleClass("hidden");
    $(".cross").toggleClass("hidden");
  });
});