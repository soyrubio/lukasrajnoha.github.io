class Tile {
  constructor(id, current_number, result_number) {
    this.id = id;
    this.current_number = current_number;
    this.result_number = result_number;
    this.solved = current_number == result_number;
  }

  get_html() {
    var text_solved = "";
    if (this.solved) {
      text_solved = "disabled";
    }
    const tile_html = `<button class="tile ${text_solved}" data-tileid="${this.id}" data-currentnumber="${this.current_number}"><div class="tile-dot"></div></div>`;
    return tile_html;
  }

   set_current_number() {
    this.current_number = this.result_number;
    this.solved = true;
    this.update_html();
  }


  check_current_number(current_number) {
    if (this.result_number == current_number) {
      
      this.set_success();
      var that = this;
      setTimeout(function () { that.set_current_number() }, animation_speed);
      setTimeout(deactivate_controls, animation_speed);
      

    } else {
      throw_incorrent_number_error();
    }
  }

  set_success() {
    console.log($(`[data-controlid="${this.id}"]`));
    $(`[data-controlid="${this.result_number}"]`).addClass("success");
  }

 
  update_html() {
    console.log(this.id);
    $(`.tile[data-tileid="${this.id}"]`).attr("data-currentnumber", this.current_number).addClass("disabled");
  }
}