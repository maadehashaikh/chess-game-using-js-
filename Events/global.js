import { root_div } from "../Helper/constants.js";
import { globalState } from "../index.js";
import { renderHighlight } from "../Render/main.js";
import { clearHighlight } from "../Render/main.js";
import { selfHighlight } from "../Render/main.js";

//highlighted or not ?
let highlight_state = false;

function whitePawnClicked({ piece }) {
  //Click element will highlight
  selfHighlight(piece);

  const current_position = piece.current_position;
  const flatArray = globalState.flat();
  //on initial position
  if (current_position[1] == "2") {
    const highlightSquareId = [
      `${current_position[0]}${Number(current_position[1]) + 1}`,
      `${current_position[0]}${Number(current_position[1]) + 2}`,
    ];

    //clear board for any previous highlights
    clearHighlight();

    highlightSquareId.forEach((highlight) => {
      globalState.forEach((row) => {
        row.forEach((element) => {
          if (element.id == highlight) {
            element.highlight(true);
          }
        });
      });
      // if (highlight_state) clearHighlight();
      // renderHighlight(highlight);
      // highlight_state = true;
    });
  }

  // console.log(globalState);
}

function gloablEvent() {
  root_div.addEventListener("click", function (event) {
    if (event.target.localName === "img") {
      const ClickId = event.target.parentNode.id;
      const flatArray = globalState.flat();
      const square = flatArray.find((el) => el.id == ClickId);
      if (square.piece.piece_name == "white_pawn") {
        whitePawnClicked(square);
      }
    }
  });
}

export { gloablEvent };
