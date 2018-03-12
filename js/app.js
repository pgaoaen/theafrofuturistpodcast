$(document).ready(function() {
  var owl = $('#slider-carousel');
  owl.owlCarousel({
    items: 3,
    itemsDesktop: [1000, 3],
    itemsDesktopSmall: [900, 2],
    itemsTablet: [600, 1],
    itemsMobile: false,
    pagination: false
  });
   $(".next").click(function() {
     owl.trigger('owl.next');
  })
   $(".prev").click(function() {
     owl.trigger('owl.prev');
  })
});

$(document).ready(function() {
  var owl = $('#slider-carousel2');
  owl.owlCarousel({
    items: 1,
    itemsDesktop: [1000, 1],
    itemsDesktopSmall: [900, 1],
    itemsTablet: [600, 1],
    itemsMobile: false,
    pagination: false
  });
   $(".next2").click(function() {
     owl.trigger('owl.next');
  })
   $(".prev2").click(function() {
     owl.trigger('owl.prev');
  })
});
