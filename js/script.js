$(document).ready(function () {

  /*---Sticky Nav ---*/
  $(".js--section-features").waypoint(
    function (direction) {
      if (direction === "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "60px;",
    }
  );

  /*---Sroll on button  ---*/
  $(".js--scroll-to-plans").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-plans").offset().top },
      300
    );
  });

  $(".js--scroll-to-start").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-features").offset().top },
      300
    );
  });

  /*------Sroll Nav----*/
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top,
            },
            300,
            function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });

  /*------Sroll Animate----*/
  $(".js--wp-features").waypoint(
    function (direction) {
      $(".js--wp-features").addClass("animate__fadeIn");
    },
    {
      offset: "50%",
    }
  );

  $(".js--wp-steps").waypoint(
    function (direction) {
      $(".js--wp-steps").addClass("animate__fadeInUp");
    },
    {
      offset: "50%",
    }
  );

  $(".js--wp-cities").waypoint(
    function (direction) {
      $(".js--wp-cities").addClass("animate__fadeIn");
    },
    {
      offset: "50%",
    }
  );

  $(".js--wp-plan").waypoint(
   function (direction) {
     $(".js--wp-plan").addClass("animate__pulse");
   },
   {
      offset: "50%",
   }
 );

 /*----MOBILE NAV----*/
 $('.js--nav-icon').click(function () {
   
    var nav = $('.js--main-nav');
    var icon= $('.js--nav-icon i');
    nav.slideToggle(200,function() {
       if(nav.css('display') === 'none') {
         $(this).css('display', '');
       }     
    });

    if(icon.hasClass('ion-navicon-round')) {
      icon.addClass('ion-close-round');
      icon.removeClass('ion-navicon-round');
    } else if (icon.hasClass('ion-close-round'))  {
      icon.addClass('ion-navicon-round');
      icon.removeClass('ion-close-round');
    }
   });


});
