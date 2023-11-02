import { useState } from "react";
import GuessesGrid from "../Guesses/GuessesGrid.js";
import KeyboardDisplay from "../Keyboard/KeyboardApp.js";
import "./App.css";

const initialGuessState = ["", "", "", "", ""];
const initialAnswerState = [];

export default function App() {
  const [guessState, setGuessState] = useState(initialGuessState);
  const [answerState, setAnswerState] = useState(initialAnswerState);
  console.log('app level guessState', guessState);
  console.log('app level answerState', answerState)
  return (
    <div className="App">
      <GuessesGrid guessState={guessState} answerState={answerState} />
      <KeyboardDisplay
        guessState={guessState}
        setGuessState={setGuessState}
        answerState={answerState}
        setAnswerState={setAnswerState}
      />
    </div>
  );
}
