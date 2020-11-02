switch (ReactDOM.querySelector("#root")) {
    | Some(root) => ReactDOM.render(<Greeting name="John" />, root)
    | None => ()
    }