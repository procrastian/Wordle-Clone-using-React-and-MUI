import { useState } from "react";
import GuessesGrid from "../Guesses/GuessesGrid.js";
import KeyboardDisplay from "../Keyboard/KeyboardApp.js";
import "./App.css";
import ResetButton from "../Button/Button.js";

const initialGuessState = ["", "", "", "", ""];
const initialAnswerState = [];

export default function App() {
  const [totalGuessesState, setTotalGuessesState] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [guessState, setGuessState] = useState(initialGuessState);
  const [currentGuessNumberState, setCurrentGuessNumberState] = useState(0);
  const [answerState, setAnswerState] = useState(initialAnswerState);
  const [targetWord, setTargetWord] = useState("");

  console.log("app level guessState", guessState);
  console.log("app level answerState", answerState);
  console.log("app level targetWord", targetWord);

  if (answerState === targetWord.toString())
    return console.log("correct word guessed!");

  // keep track of which row of the available guesses we are on. Start at 1 and when a guess is made, increment

  return (
    <div className="App">
      {totalGuessesState.map((guessObj, index) => (
        <GuessesGrid
          currentGuessNumberState={currentGuessNumberState}
          guessState={guessState}
          answerState={answerState}
        />
      ))}
      <KeyboardDisplay
        guessState={guessState}
        setGuessState={setGuessState}
        answerState={answerState}
        setAnswerState={setAnswerState}
        currentGuessNumberState={currentGuessNumberState}
        setCurrentGuessNumberState={setCurrentGuessNumberState}
      />
      <ResetButton setTargetWord={setTargetWord} />
    </div>
  );
}
