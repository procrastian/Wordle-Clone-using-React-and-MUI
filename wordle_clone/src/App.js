import "./App.css";
import Guesses from "./components/Guesses.js";
import Keyboard from "./components/Keyboard.js";

function App() {
  return (
    <div className="App">
      <Guesses />
      <Keyboard />
    </div>
  );
}

export default App;
