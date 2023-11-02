import BasicGrid from "../Guess/GuessGrid.js";
import KeyboardDisplay from "../Keyboard/KeyboardApp.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <BasicGrid />
      <KeyboardDisplay />
    </div>
  );
}
