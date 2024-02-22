import React, { useRef } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

export default function KeyboardDisplay({cardRenderState, setCardRenderState, guessedWord, setguessedWord, attemptNumberState, setAttemptNumberState}) {

  const keyboard = useRef();

  const onChange = (cardRenderState) => {
    console.log("Input changed", cardRenderState);
    setCardRenderState(cardRenderState);
  };

  const onKeyPress = (button) => {
    console.log("Button pressed", button);
    if(button === "{enter}") handleEnter(cardRenderState)
  };

  const handleEnter = (guess) => {
    if(guess.length < 5) return "guess must be 5 letters"
    console.log('guessed:', guess)
    setguessedWord(...guessedWord, guess)
    setAttemptNumberState(attemptNumberState++)
  }

  return (
    <div className="keyboard">
      <Keyboard
        keyboardRef={(r) => (keyboard.current = r)}
        onChange={onChange}
        onKeyPress={onKeyPress}
        layout={{
          default: [
            "Q W E R T Y U I O P",
            "A S D F G H J K L",
            "{bksp} Z X C V B N M {enter}",
          ],
        }}
        buttonTheme={[
          {
            class: "hg-red",
            buttons: "Q W E R T Y q w e r t y",
          },
          {
            class: "hg-highlight",
            buttons: "Q q",
          },
        ]}
      />
    </div>
  );
}
