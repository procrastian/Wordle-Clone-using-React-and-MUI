import "./App.css";
import Guesses from "./Components/Guesses.js";
import Keyboard from "./Components/Keyboard.js";

function App() {
  return (
    <div className="App">
      <Guesses />
      <Keyboard />
    </div>
  );
}

export default App;
