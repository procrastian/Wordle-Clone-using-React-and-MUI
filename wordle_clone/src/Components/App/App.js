import SimpleContainer from "../Container/Container.js";
import BasicGrid from "../Guess/GuessGrid.js";
import KeyboardApp from "../Keyboard/KeyboardApp.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <BasicGrid />
      <SimpleContainer>
        <KeyboardApp />
      </SimpleContainer>
    </div>
  );
}
