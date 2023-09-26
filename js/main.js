$(function () {
  var isRotated = false;

  $(".gd_img").click(function () {
    if (isRotated) {
      $(this).css("transform", "rotateY(40deg)");
      isRotated = false;
    } else {
      $(this).css("transform", "rotateY(180deg)");
      isRotated = true;
    }
  });

  $(".gd_img").hover(
    function () {
      if (!isRotated) {
        $(this).css("transform", "rotateY(45deg)");
      }
    },
    function () {
      if (!isRotated) {
        $(this).css("transform", "rotateY(0deg)");
      }
    }
  );
});
