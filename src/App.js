import "./App.css";
import { make as Squares } from "./Squares.bs";
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
var name = "Tach Nazarov";
var squares = [
  { key: 1, color: getRandomColor() },
  { key: 2, color: getRandomColor() },
  { key: 3, color: getRandomColor() },
  { key: 4, color: getRandomColor() },
  { key: 5, color: getRandomColor() },
  { key: 6, color: getRandomColor() },
  { key: 7, color: getRandomColor() },
  { key: 8, color: getRandomColor() },
  { key: 9, color: getRandomColor() },
];

function App() {
  return (
    <div>
      <div className="header">
        <h2>Name: {name}</h2>
      </div>
      <div className="content">
        <Squares squares={squares} />
      </div>
    </div>
  );
}

export default App;
