import React, { useRef } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

export default function KeyboardDisplay({guessState, setGuessState, answerState, setAnswerState}) {

  const keyboard = useRef();

  const onChange = (guessState) => {
    setGuessState(guessState);
    console.log("Input changed", guessState);
  };

  const onKeyPress = (button) => {
    console.log("Button pressed", button);
    if(button === "{enter}") handleEnter(guessState)
  };

  const onChangeInput = (event) => {
    const guessState = event.target.value;
    setGuessState(guessState);
    keyboard.current.setGuessState(guessState);
  };

  const handleEnter = (guess) => {
    if(guess.length < 5) return "guess must be 5 letters"
    console.log('guessed:', guess)
    setAnswerState(...answerState, guess)
  }

  return (
    <div className="keyboard">
      <guessState
        value={guessState}
        placeholder={"Tap on the virtual keyboard to start"}
        onChange={onChangeInput}
      />
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
