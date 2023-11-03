import Letter from "../Letter/Letter";
import { useState } from "react";
export default function Guesses() {
  const initialState = ["", "", "", "", ""];
  const [guessState, setGuessState] = useState(initialState);

  console.log(guessState);
  return (
    <section className="guesses">
      <ul>
        {guessState.map((item, index) => (
          <li className="letter-card" key={index}>
            <Letter />
          </li>
        ))}
      </ul>
    </section>
  );
}
