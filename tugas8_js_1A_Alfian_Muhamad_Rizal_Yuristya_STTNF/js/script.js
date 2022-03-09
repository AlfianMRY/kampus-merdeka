$(document).ready(function () {
  // Jquery Suara Hewan
  $(".ayam")
    .mouseenter(function () {
      $("<audio></audio>")
        .attr({
          src: "audio/ayam.mp3",
          volume: 0.4,
          autoplay: "autoplay",
        })
        .appendTo("body");
      $(".ayam").css({
        "background-image": "url('img/ayam.jpg')",
        "background-size": "100px 100px",
      });
    })
    .mouseleave(function () {
      $("audio").remove();
      $(".ayam").css({
        background: "red",
      });
    });
  $(".anjing")
    .mouseenter(function () {
      $("<audio></audio>")
        .attr({
          src: "audio/anjing.mp3",
          volume: 0.4,
          autoplay: "autoplay",
        })
        .appendTo("body");
      $(".anjing").css({
        "background-image": "url('img/anjing.png')",
        "background-size": "100px 100px",
      });
    })
    .mouseleave(function () {
      $("audio").remove();
      $(".anjing").css({
        background: "red",
      });
    });
  $(".kambing")
    .mouseenter(function () {
      $("<audio></audio>")
        .attr({
          src: "audio/kambing.mp3",
          volume: 0.4,
          autoplay: "autoplay",
        })
        .appendTo("body");
      $(".kambing").css({
        "background-image": "url('img/kambing.jpg')",
        "background-size": "100px 100px",
      });
    })
    .mouseleave(function () {
      $("audio").remove();
      $(".kambing").css({
        background: "red",
      });
    });
  $(".kucing")
    .mouseenter(function () {
      $("<audio></audio>")
        .attr({
          src: "audio/kucing.mp3",
          volume: 0.4,
          autoplay: "autoplay",
        })
        .appendTo("body");
      $(".kucing").css({
        "background-image": "url('img/kucing.jpg')",
        "background-size": "100px 100px",
      });
    })
    .mouseleave(function () {
      $("audio").remove();
      $(".kucing").css({
        background: "red",
      });
    });
  $(".kuda")
    .mouseenter(function () {
      $("<audio></audio>")
        .attr({
          src: "audio/kuda.mp3",
          volume: 0.4,
          autoplay: "autoplay",
        })
        .appendTo("body");
      $(".kuda").css({
        "background-image": "url('img/kuda.jpg')",
        "background-size": "100px 100px",
      });
    })
    .mouseleave(function () {
      $("audio").remove();
      $(".kuda").css({
        background: "red",
      });
    });

  // Jquery Comprof
  $("#comprof").click(function () {
    $("#isicomprof").slideToggle("slow");
  });
  $("#visimisi").click(function () {
    $("#isivisimisi").slideToggle("slow");
  });
  $("#deskbisnis").click(function () {
    $("#isideskbisnis").slideToggle("slow");
  });
});
