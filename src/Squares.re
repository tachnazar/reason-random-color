type square = {
    key: string,
    color: string,
};
[@react.component]
  let make = (~squares) =>
      {
        squares
        ->Belt.Array.map(square =>
            <div key={square.key} style=(
                ReactDOM.Style.make(~background=square.color, ~width="200px",~height="200px",~margin="20px", ())
              )></div>

          )
        /* Since everything is typed, the arrays need to be, too! */
        ->React.array
      };