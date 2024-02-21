import { useState } from "react";
import GuessRowGrid from "../GuessesAll/GuessRowGrid.js";
import KeyboardDisplay from "../Keyboard/KeyboardApp.js";
import "./App.css";
import ResetButton from "../Button/Button.js";

const initialGuessState = ["", "", "", "", ""];
const initialAnswerState = [{letter:'', color:'lightgrey'}];
const initialCardColorState = "lightgrey";

export default function App() {
  //for rendering the input letters
  const [guessState, setGuessState] = useState(initialGuessState);
  const [attemptNumberState, setAttemptNumberState] = useState(1);
  //for checking the letters when enter is hit
  const [answerState, setAnswerState] = useState(initialAnswerState);
  //for the generated word being guessed
  const [targetWord, setTargetWord] = useState("");

  const [cardColorState, setCardColorState] = useState(initialCardColorState);

  console.log("app level guessState", guessState);
  console.log("app level answerState", answerState);
  console.log("app level targetWord", targetWord);
  console.log("attempt number", attemptNumberState);
  if (answerState === targetWord.toString())
    return console.log("correct word guessed!");

  /*

  What states are we tracking for each answer guess?
    which position 0-4 (index of the answer given)
    letter that is guessed
    colour of card
      depends on:
        is it correct pos and letter?
        is it incorrect pos for letter?
        incorrect position and incorect letter?
    {letter: '',
     card colour: 'darkgrey || yellow || green'}
    

  Currently have to press reset to generate initial target word
  
  Have state that monitors guess color for cards?
    default = light grey
      when guess submitted trigger to change the value?

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

  if (targetWord) {
    const targetWordArray = targetWord[0].split("");
    console.log("TWA:", targetWordArray);

    for (let i = 0; i < answerState.length; i++) {
      if (answerState[i] === targetWordArray[i]) {
        console.log("matching letter! at position:", i);
        // setCardColorState("green");
      }
    }
  }


  return (
    <div className="App">
      <GuessRowGrid
        attemptNumberState={attemptNumberState}
        guessState={guessState}
        answerState={answerState}
        cardColorState={cardColorState}
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
