//Fade-In Animation for components as they come into the view of the window
$(window).on("load",function() {
    $(window).scroll(function() {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".fade").each(function() {
        /* Check the location of each desired element */
        var objectBottom = $(this).offset().top + $(this).innerHeight()/2;

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