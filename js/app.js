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


// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = "imgs/taille.jpg";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
document.getElementById("close-taille").onclick = function() { 
  modal.style.display = "none";
}