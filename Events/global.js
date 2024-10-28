import { root_div } from "../Helper/constants.js";
import { globalState } from "../index.js";

function whitePawnClicked({ piece }) {
  console.log(piece);
}

function gloablEvent() {
  root_div.addEventListener("click", function (event) {
    if (event.target.localName === "img") {
      const ClickId = event.target.parentNode.id;

      const flatArray = globalState.flat();
      const square = flatArray.find((el) => el.id == ClickId);
      if (square.piece.piece_name == "white_pawn") {
        whitePawnClicked();
      }
    }
  });
}

export { gloablEvent };
