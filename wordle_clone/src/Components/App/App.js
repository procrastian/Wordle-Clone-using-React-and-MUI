import { useState } from "react";
import GuessesGrid from "../Guesses/GuessesGrid.js";
import KeyboardDisplay from "../Keyboard/KeyboardApp.js";
import "./App.css";

const initialState = ['', '', '', '', '']

export default function App() {
  
  const [guessState, setGuessState] = useState(initialState)
  console.log(guessState)
  return (
    <div className="App">
      <GuessesGrid guessState={guessState}/>
      <KeyboardDisplay guessState={guessState} setGuessState={setGuessState}/>
    </div>
  );
}
