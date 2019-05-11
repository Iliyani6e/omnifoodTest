// sticky navigation
$(document).ready(function() {
  $(".js--section-features").waypoint(
    function(direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "80px;"
    }
  );
  // scroll on buttons
  $(".js--scroll-to-plans").click(function() {
    $("html, body").animate(
      { scrollTop: $(".js--section-plans").offset().top },
      1000
    );
  });
  $(".js--scroll-to-start").click(function() {
    $("html, body").animate(
      { scrollTop: $(".js--section-features").offset().top },
      1000
    );
  });

  //   =====================smooth scroll=================

  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
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
              scrollTop: target.offset().top
            },
            700,
            function() {
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

  // ==============ANIMATIONS ON SCROLL==========================
  $(".js--wp-1").waypoint(
    function(direction) {
      if (direction == "down") {
        $(".js--wp-1").addClass("animated fadeIn");
      } else {
        $(".js--wp-1").removeClass("animated fadeIn");
      }
    },
    {
      offset: "50%"
    },
    2000
  );
  $(".js--wp-2").waypoint(
    function(direction) {
      if (direction == "down") {
        $(".js--wp-2").addClass("animated fadeInUp");
      } else {
        $(".js--wp-2").removeClass("animated fadeInUp");
      }
    },
    {
      offset: "100%"
    }
  );
  $(".js--wp-3").waypoint(
    function(direction) {
      if (direction == "down") {
        $(".js--wp-3").addClass("animated fadeIn");
      } else {
        $(".js--wp-3").removeClass("animated fadeIn");
      }
    },
    {
      offset: "50%"
    }
  );
  $(".js--wp-4").waypoint(
    function(direction) {
      if (direction == "down") {
        $(".js--wp-4").addClass("animated pulse");
      } else {
        $(".js--wp-4").removeClass("animated pulse");
      }
    },
    {
      offset: "50%"
    }
  );
  //   ================MOBILE NAV==============

  $(".js--nav-icon").click(function() {
    var nav = $(".js--main-nav");
    var icon = $(".js--nav-icon i");
    nav.slideToggle(200);
    if (icon.hasClass("fa-bars")) {
      icon.addClass("fa-times");
      icon.removeClass("fa-bars");
    } else {
      icon.addClass("fa-bars");
      icon.removeClass("fa-times");
    }
  });
  var map = new GMaps({
    div: ".map",
    lat: 42.4193132,
    lng: 25.78,
    zoom: 11.75
  });
  map.addMarker({
    lat: 42.445211,
    lng: 25.634919,
    title: "Езерото",
    infoWindow: {
      content: "<p>Езерото</p>"
    }
  });
  map.drawRoute({
    origin: [42.445211, 25.634919],
    destination: [42.411188, 25.589611],
    travelMode: "driving",
    strokeColor: "#101bf3",
    strokeOpacity: 0.8,
    strokeWeight: 6
  });
});
// 42.445211, 25.634919 Zagorka
// 42.411188, 25.589611 anna
