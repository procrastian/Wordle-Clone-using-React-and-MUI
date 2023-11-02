import React, { useRef, useState } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

export default function KeyboardDisplay() {
  const [input, setInput] = useState("");

  const keyboard = useRef();

  const onChange = (input) => {
    setInput(input);
    console.log("Input changed", input);
  };

  const onKeyPress = (button) => {
    console.log("Button pressed", button);
  };

  const onChangeInput = (event) => {
    const input = event.target.value;
    setInput(input);
    keyboard.current.setInput(input);
  };

  return (
    <div className="keyboard">
      <input
        value={input}
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
