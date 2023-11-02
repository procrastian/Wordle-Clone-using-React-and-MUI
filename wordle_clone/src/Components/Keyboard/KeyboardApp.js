import React, { Component } from "react";
import { render } from "react-dom";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

export default function KeyboardApp() {
  class App extends Component {
    state = {
      layoutName: "default",
      input: "",
    };

    onChange = (input) => {
      this.setState({
        input: input,
      });
      console.log("Input changed", input);
    };

    onKeyPress = (button) => {
      console.log("Button pressed", button);
    };

    onChangeInput = (event) => {
      let input = event.target.value;
      this.setState(
        {
          input: input,
        },
        () => {
          this.keyboard.setInput(input);
        }
      );
    };

    render() {
      return (
        <div>
          <input
            value={this.state.input}
            placeholder={"Tap on the virtual keyboard to start"}
            onChange={(e) => this.onChangeInput(e)}
          />
          <Keyboard
            keyboardRef={(r) => (this.keyboard = r)}
            onChange={(input) => this.onChange(input)}
            onKeyPress={(button) => this.onKeyPress(button)}
            theme={"hg-theme-default hg-layout-default myTheme"}
            layoutName={this.state.layoutName}
            layout={{
              default: [
                "Q W E R T Y U I O P",
                "A S D F G H J K L",
                "{enter} Z X C V B N M {bksp}",
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
  }

  render(<App />, document.getElementById("root"));
}
