function throw_incorrent_number_error () {
  $("#messages-container").html("Incorrent number").fadeIn(animation_speed).delay(2000).fadeOut(1000);
}

function deactivate_controls(obj) {
  $("#sudoku-controls-container").addClass("exiting");
  setTimeout(function() {
      $("#sudoku-controls-container").removeClass("active").removeClass("exiting");
      $(".sudoku-control").removeClass("success");
    }, animation_speed);
}

function activate_controls(obj) {
  var offset = obj.offset();
  var width = obj.width();
  var height = obj.height();
  var centerX = offset.left + width / 2;
  var centerY = offset.top + height / 2;

  $("#sudoku-controls-container")
    .css("left", centerX)
    .css("top", centerY)
    .addClass("active")
    .attr("data-currenttileid", obj.attr("data-tileid"));
}


$(document).ready(function() {
  const sudoku_board = new Sudoku("medium");
  console.log(sudoku_board);
  sudoku_board.update_html(".sudoku");
 
  
  $(".tile:not(.disabled)").click(function () {
    activate_controls($(this));
  });

  $("#sudoku-controls-container").mouseleave(function () {
    deactivate_controls();
  });

  $(".sudoku-control").click(function () {
    sudoku_board.change_tile(
      $("#sudoku-controls-container").attr("data-currenttileid"),
      $(this).attr("data-controlid"));
  });

  $(".tile.disabled").mouseover(function () {
    var that = $(this);
      timer = setTimeout(function () {
          const selector = `.tile[data-currentnumber="${$(that).attr('data-currentnumber')}"]`;
          $(selector).addClass("highlight");
          $("#sudoku-game .sudoku").addClass("highlight-active");
      }, 0);
    }).mouseout(function () {
      clearTimeout(timer);
      $("#sudoku-game .sudoku").removeClass("highlight-active");
      $(".tile").removeClass("highlight");

    });  
});

