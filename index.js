$(".Experience").click(function() {
    $(".Skills").removeClass("active-link");
    $(".Education").removeClass("active-link");
    $(".Experience").addClass("active-link");
    $(".skills").removeClass("active-tab");
    $(".education").removeClass("active-tab");
    $(".experience").addClass("active-tab");

});
$(".Education").click(function() {
    $(".Skills").removeClass("active-link");
    $(".Experience").removeClass("active-link");
    $(".Education").addClass("active-link");
    $(".skills").removeClass("active-tab");
    $(".experience").removeClass("active-tab");
    $(".education").addClass("active-tab");
});
$(".Skills").click(function() {
    $(".Experience").removeClass("active-link");
    $(".Education").removeClass("active-link");
    $(".Skills").addClass("active-link");
    $(".experience").removeClass("active-tab");
    $(".education").removeClass("active-tab");
    $(".skills").addClass("active-tab");
});


$(".fa-xmark").click(function(){
    var navUl = document.querySelector("nav ul");
    if (navUl.style.right === "0px") {
        navUl.style.right = "-200px"; // Hide the navigation menu
      } else {
        navUl.style.right = "0px"; // Show the navigation menu
      }
});

$(".fa-bars").click(function(){
    var navUl = document.querySelector("nav ul");
    if (navUl.style.right === "-200px") {
        navUl.style.right = "0px"; // Hide the navigation menu
      } else { 
        navUl.style.right = "-200px"; // Show the navigation menu
      }
});





