$(document).ready(function () {

     $('#carouselExampleSlidesOnly').on('slide.bs.carousel', function (e) {
          $holder = $(".carousel-custom-indicators h3.text-danger");
          $holder.next("h3").addClass("text-danger");
          if ($holder.is(':last-child')) {
               $holder.removeClass("active");
               $(".carousel-custom-indicators h3:first").addClass("text-danger");
          }
          $holder.removeClass("text-danger");

          var index = e.to + 1;

          $('.carousel-slide-text-holder p').removeClass('active');
          $('.carousel-slide-text-holder p:nth-child(' + index + ')')
               .addClass('active');
     });
});