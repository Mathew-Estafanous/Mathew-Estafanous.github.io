//Fade-In Animation for components as they come into the view of the window
$(window).on("load",function() {
    $(window).scroll(function() {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".fade").each(function() {
        /* Check the location of each desired element */
        var objectBottom = $(this).offset().top + $(this).innerHeight()/4;

        /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom < windowBottom) { //object comes into view (scrolling down)
          if (!$(this).hasClass("active")) {
            $(this).addClass("active");
          }
        } else { //object goes out of view (scrolling up)
          if ($(this).hasClass("active")) {
            $(this).removeClass("active");
          }
        }
      });
    }).scroll(); //invoke scroll-handler on page-load
  });