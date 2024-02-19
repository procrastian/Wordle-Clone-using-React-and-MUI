import { useState } from "react";
import GuessRowGrid from "../GuessesAll/GuessRowGrid.js";
import KeyboardDisplay from "../Keyboard/KeyboardApp.js";
import "./App.css";
import ResetButton from "../Button/Button.js";

const initialGuessState = ["", "", "", "", ""];
const initialAnswerState = [];

export default function App() {
  const [guessState, setGuessState] = useState(initialGuessState);
  const [attemptNumberState, setAttemptNumberState] = useState(1);
  const [answerState, setAnswerState] = useState(initialAnswerState);
  const [targetWord, setTargetWord] = useState("");

  console.log("app level guessState", guessState);
  console.log("app level answerState", answerState);
  console.log("app level targetWord", targetWord);
  console.log("attempt number", attemptNumberState);
  if (answerState === targetWord.toString())
    return console.log("correct word guessed!");

  /*
  When guessState is updated
    check if guessState has correct letter in correct position
      IF guessState[i] === answerState[i] 
        --> turn card GREEN
        --> turn keyboard letter GREEN
    check if guessState has any matching letters in an incorrect position
      IF guessState[i] === answerState[any that aren't i]
        --> turn card YELLOW
        --> turn keyboard letter yellow
    any incorrect letters
      ELSE guessState[i] =/= answerState[any]
        --> turn card dark grey
        --> turn keyboard letter dark grey
  */

  return (
    <div className="App">
      <GuessRowGrid
        attemptNumberState={attemptNumberState}
        guessState={guessState}
        answerState={answerState}
      />

      <KeyboardDisplay
        guessState={guessState}
        setGuessState={setGuessState}
        answerState={answerState}
        setAnswerState={setAnswerState}
        attemptNumberState={attemptNumberState}
        setAttemptNumberState={setAttemptNumberState}
      />
      <ResetButton setTargetWord={setTargetWord} />
    </div>
  );
}
