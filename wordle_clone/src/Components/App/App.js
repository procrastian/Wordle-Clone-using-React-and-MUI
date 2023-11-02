import GuessesGrid from "../Guesses/GuessesGrid.js";
import KeyboardDisplay from "../Keyboard/KeyboardApp.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <GuessesGrid />
      <KeyboardDisplay />
    </div>
  );
}
