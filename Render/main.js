// import { blackPawn } from "../Data/pieces.js";
import * as piece from "../Data/pieces.js";
import { root_div } from "../Helper/constants.js";
import { globalState } from "../index.js";

// use when we have to render the pieces of chess on board
function pieceRender(data) {
  data.forEach((row) => {
    row.forEach((square) => {
      //if square has piece
      if (square.piece) {
        const squareEl = document.getElementById(square.id);

        //create piece
        const piece = document.createElement("img");
        piece.src = square.piece.img;
        piece.classList.add("piece");

        // insert piece into square element
        squareEl.appendChild(piece);
      }
    });
  });
}

//function calls only when game start
function initGameRender(data) {
  data.forEach((element) => {
    const rowEl = document.createElement("div");
    element.forEach((square) => {
      const squarediv = document.createElement("div");
      squarediv.id = square.id;
      squarediv.classList.add(square.color, "square");

      //rendering black pawn
      if (square.id[1] == 7) {
        square.piece = piece.blackPawn(square.id);
      }

      //rendering black pawn
      if (square.id == "h8" || square.id == "a8") {
        square.piece = piece.blackRook(square.id);
      }

      //render blackKnight
      if (square.id == "b8" || square.id == "g8") {
        square.piece = piece.blackKnight(square.id);
      }

      //render blackBishop
      if (square.id == "c8" || square.id == "f8") {
        square.piece = piece.blackBishop(square.id);
      }

      //render blackQueen
      if (square.id == "d8") {
        square.piece = piece.blackQueen(square.id);
      }

      //render blackKing
      if (square.id == "e8") {
        square.piece = piece.blackKing(square.id);
      }

      //render white pawn
      if (square.id[1] == 2) {
        square.piece = piece.whitePawn(square.id);
      }
      //rendering whiteRook
      if (square.id == "h1" || square.id == "a1") {
        square.piece = piece.whiteRook(square.id);
      }

      //render whiteKnight
      if (square.id == "b1" || square.id == "g1") {
        square.piece = piece.whiteKnight(square.id);
      }

      //render blackBishop
      if (square.id == "c1" || square.id == "f1") {
        square.piece = piece.whiteBishop(square.id);
      }

      //render blackQueen
      if (square.id == "d1") {
        square.piece = piece.whiteQueen(square.id);
      }

      //render blackKing
      if (square.id == "e1") {
        square.piece = piece.whiteKing(square.id);
      }

      rowEl.appendChild(squarediv);
    });

    rowEl.classList.add("squareRow");
    root_div.appendChild(rowEl);
  });

  pieceRender(data);
}

//render highlight circle in js
function renderHighlight(squareId) {
  const highlightSpan = document.createElement("span");
  highlightSpan.classList.add("highlight");
  document.getElementById(squareId).appendChild(highlightSpan);
}

// clear all highlights
function clearHighlight() {
  const flatData = globalState.flat();
  flatData.forEach((el) => {
    if (el.highlighted) {
      document.getElementById(el.id).innerHTML = "";
      el.highlighted = false;
    }
  });
}

// self highlight function on clicking pawn
function selfHighlight() {}
export { initGameRender, renderHighlight, clearHighlight };
