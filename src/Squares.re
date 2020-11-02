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
                  ReactDOM.Style.make(~background=square.color, ~width="150px",~height="150px",~margin="10px", ()))>
              </div>
          )
        /* Since everything is typed, the arrays need to be, too! */
        ->React.array
      };