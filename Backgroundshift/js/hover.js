<script>
$( ".position1" ).mouseenter(function() {
    $(".position2").toggleClass("toggle");
    $(".position3").toggleClass("toggle");
    $(".position4").toggleClass("toggle");
  })
  .mouseleave(function() {
    $(".position2").toggleClass("toggle");
    $(".position3").toggleClass("toggle");
    $(".position4").toggleClass("toggle");
  });
///////////////////////////////////////////////
$( ".position2" ).mouseenter(function() {
    $(".position1").toggleClass("toggle");
    $(".position3").toggleClass("toggle");
    $(".position4").toggleClass("toggle");
  })
  .mouseleave(function() {
    $(".position1").toggleClass("toggle");
    $(".position3").toggleClass("toggle");
    $(".position4").toggleClass("toggle");
  });
///////////////////////////////////////////////
$( ".position3" ).mouseenter(function() {
    $(".position1").toggleClass("toggle");
    $(".position2").toggleClass("toggle");
    $(".position4").toggleClass("toggle");
  })
  .mouseleave(function() {
    $(".position1").toggleClass("toggle");
    $(".position2").toggleClass("toggle");
    $(".position4").toggleClass("toggle");
  });
///////////////////////////////////////////////
$( ".position4" ).mouseenter(function() {
    $(".position1").toggleClass("toggle");
    $(".position2").toggleClass("toggle");
    $(".position3").toggleClass("toggle");
  })
  .mouseleave(function() {
    $(".position1").toggleClass("toggle");
    $(".position2").toggleClass("toggle");
    $(".position3").toggleClass("toggle");
  });
</script>