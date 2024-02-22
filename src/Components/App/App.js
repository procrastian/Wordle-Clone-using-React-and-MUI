import { useState } from "react";
import KeyboardDisplay from "../Keyboard/KeyboardApp.js";
import ResetButton from "../Button/Button.js";
import CardGrid from "../Cards/CardGrid.js";

import "./App.css";

const attemptArray = Array.from(Array(5), () => ({
  letter: "",
  cardColor: "lightgrey",
}));
const cardsArray = Array.from(Array(6), () => attemptArray);
console.log("cardsArray", cardsArray);

const initialTargetWord = "GUESS";
const initialCardRenderState = [cardsArray];

export default function App() {
  const [targetWord, setTargetWord] = useState(initialTargetWord);
  const [cardRenderState, setCardRenderState] = useState(
    initialCardRenderState
  );
  const [guessedWord, setGuessedWord] = useState([]);
  const [attemptNumberState, setAttemptNumberState] = useState(1);

  if (guessedWord === targetWord.toString())
    return console.log("correct word guessed!");

  return (
    <div className="App">
      <CardGrid cardRenderState={cardRenderState} />
      <KeyboardDisplay
        cardRenderState={cardRenderState}
        setCardRenderState={setCardRenderState}
        guessedWord={guessedWord}
        setGuessedWord={setGuessedWord}
        attemptNumberState={attemptNumberState}
        setAttemptNumberState={setAttemptNumberState}
      />
      <ResetButton setTargetWord={setTargetWord} />
    </div>
  );
}
