import { useState } from "react";
import GuessesGrid from "../Guesses/GuessesGrid.js";
import KeyboardDisplay from "../Keyboard/KeyboardApp.js";
import "./App.css";
import ResetButton from "../Button/Button.js";

const initialGuessState = ["", "", "", "", ""];
const initialAnswerState = [];

export default function App() {
  const [guessState, setGuessState] = useState(initialGuessState);
  const [answerState, setAnswerState] = useState(initialAnswerState);
  const [targetWord, setTargetWord] = useState('')

  console.log('app level guessState', guessState);
  console.log('app level answerState', answerState)
  console.log('app level targetWord', targetWord)

  if (answerState === targetWord.toString()) return console.log("correct word guessed!")

  return (
    <div className="App">
      <GuessesGrid guessState={guessState} answerState={answerState} />
      <KeyboardDisplay
        guessState={guessState}
        setGuessState={setGuessState}
        answerState={answerState}
        setAnswerState={setAnswerState}
      />
      <ResetButton setTargetWord={setTargetWord}/>
    </div>
  );
}
