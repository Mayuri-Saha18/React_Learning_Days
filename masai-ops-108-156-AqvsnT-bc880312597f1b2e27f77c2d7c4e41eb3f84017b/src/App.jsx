import React from "react";
import {useState} from "react";

function App() {
  const [player,setPlayer] = useState("Player 1");
  const [counter,setCounter] = useState(0);

  const player1Click = () => {
    player === "Player 1" ? setPlayer("Player 2") : setPlayer("Player 1");
    setCounter(counter + 1);
    if (counter === 9 && player === "Player 1") {
      setPlayer("Player 1");
    } else if (counter === 9 && player === "Player 2") {
      setPlayer("Player 2");
    }
  };
  const player2Click = () => {
    player === "Player 1" ? setPlayer("Player 2") : setPlayer("Player 1");
    setCounter(counter + 2);
    if (counter === 8 && player === "Player 1") {
      setPlayer("Player 1");
    } else if (counter === 8 && player === "Player 2") {
      setPlayer("Player 2");
    }
  };

  const handleReset=()=>{
    setCounter(0);
    setPlayer("Player 1");
  }
  return (
    <div className="App">
      <h1>Welcome to Reach Ten Mini-Game</h1>
      {/* Display Player Turn here */}
      <span data-testid="turn-container">
      <h3>{`Its Your Turn: ${player}`}</h3>
      </span>


      {/* Buttons to increment the counter */}
      <div data-testid="buttons-container">
        <button data-testid="add-one-btn" disabled={counter === 10} onClick={player1Click}>+1</button>
        <button data-testid="add-two-btn" disabled={counter === 9 || counter === 10} onClick={player2Click}>+2</button>
      </div>

      {/* Display the counter here */}
      <h1 data-testid="counter">{counter}</h1>

      {/* Display the winner here */}
      <span data-testid="winner-container">
      {counter === 10 ? (
          <h3>{`Winner: ${player}`}</h3>
        ) : (
          <h3>Winner: Still To Be Decided</h3>
        )}
      </span>

      {/* Reset the Game with this button */}
      <button data-testid="reset-btn" onClick={handleReset}>Reset Game</button>
    </div>
  );
}

export default App;
