$(document).ready(function() {

        $('.number').mouseenter(function() {
          $('.footnote').addClass('showme');
        });

        $('.number').mouseleave(function() {
          $('.footnote').removeClass('showme');
        });

        $('.main').mouseenter(function() {
          $('.second').addClass('orange');
        });


        $('.thumbnail').click(function() {
          $(this).toggleClass('enlarge');
        });

  });
