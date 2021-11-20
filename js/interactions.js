//Fade-In Animation for components as they come into the view of the window
$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).innerHeight()/3;

      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if (!$(this).hasClass("inView")) {
          $(this).addClass("inView");
        }
      } else { //object goes out of view (scrolling up)
        if ($(this).hasClass("inView")) {
          $(this).removeClass("inView");
        }
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
  });


$(document).ready(function() {

  //Add drop down arrow interactions
  $(".dropdownArrow").click(function() {
    const parent = $(this).parents(".accordian");
    if(parent.hasClass("isActive")) {
      parent.removeClass("isActive");
    } else {
      parent.addClass("isActive");
    }
  });

  $(".contact > div > img").click(function() {
    console.log("TEST");
  })

});









var x = 0;
