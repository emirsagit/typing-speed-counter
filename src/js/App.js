import "../css/app.css";
import React, { useState, useEffect } from "react";

/**
 * Challenge:
 *
 * Create a function to calculate the number of separate words in the `text` state
 * For now, just console.log the word count when the button gets clicked to test it out.
 */

function App() {
  const STARTING_TIME = 4;
  const [typedText, setInput] = useState("");
  const [remainingTime, setRemainingTime] = useState(STARTING_TIME);
  const [gameStarted, setStart] = useState(false);
  const [wordCount, setWordCount] = useState(0)

  function handleChange(e) {
    const { value } = e.target;
    setInput(value);
  }

  function calculateCount() {
    return typedText.split(" ").filter((i) => i).length;
  }

  function startGame() {
    setRemainingTime(STARTING_TIME);
    setInput("");
    setWordCount(0);
    setStart(true);
  }

  useEffect(() => {
    if (gameStarted && remainingTime > 0) {
      setTimeout(() => {
        setRemainingTime(remainingTime - 1);
      }, 1000);
    }
    if (remainingTime === 0) {
      calculateCount();
      setWordCount(calculateCount());
      setStart(false);
    }
  }, [remainingTime, gameStarted]);

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea value={typedText} onChange={handleChange} name="typedText" disabled={!gameStarted}/>
      <h4>Remaining Time: {remainingTime}</h4>
      <button onClick={startGame} disabled={gameStarted}>Start Game</button>
      <h1>
        Word Count: {wordCount}
      </h1>
    </div>
  );
}

export default App;
