// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Belt_Array from "bs-platform/lib/es6/belt_Array.js";

function Squares(Props) {
  var squares = Props.squares;
  return Belt_Array.map(squares, (function (square) {
                return React.createElement("div", {
                            key: square.key,
                            style: {
                              background: square.color,
                              height: "200px",
                              margin: "20px",
                              width: "200px"
                            }
                          });
              }));
}

var make = Squares;

export {
  make ,
  
}
/* react Not a pure module */