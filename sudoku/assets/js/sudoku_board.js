class Sudoku {
  constructor (difficulty) {
    this.tiles = [];
    this.init(difficulty);
  }

  init(difficulty) {
    var sudoku_unsolved = sudoku.generate(difficulty);
    var sudoku_solved = sudoku.solve(sudoku_unsolved);

    for (var i = 0; i < 81; i++) {
      this.tiles.push(
        new Tile(i, sudoku_unsolved[i], sudoku_solved[i]));
    }
  }

  get_html() {
    var output = "";
    for (var i = 0; i < 81; i++) {
      if (i % 3 == 0 && i % 9 != 0) {
        output += "<button class='tile blank-w' disabled></button>";
      }
      if (i % 27 == 0 && i != 0) {
        for (var j = 0; j < 10; j++) {
          output += "<button class='tile blank-h' disabled></button>";
        }
      }
      output += this.tiles[i].get_html()
    }
    
    return output;
  }

  update_html(selector) {
    $(selector).html(this.get_html());
  }

  change_tile(tile_id, new_current_number) {
    this.tiles[tile_id].check_current_number(new_current_number);
  }
}
