import React, { useState, useEffect } from "react";
import { GameState } from "./GameState";
export function Board({ gameState, setGameState }) {
  const [square, setSquare] = useState(Array(9).fill(""));
  const InternalStyle = {
    backgroundColor: '#2ecc71',
    color: 'white',
    padding: '15px 30px',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '18px',
    border: '2px solid #27ae60',
    outline: 'none',
    transition: 'background-color 0.3s ease',
    fontWeight: 'bold'
  };

  const handleClick = (index) => {
    const newSquares = square.slice();
    let change = gameState === 'X' ? 'O' : 'X';
    newSquares[index] = gameState;
    setSquare(newSquares);
    setGameState(change);
  };
  useEffect(() => {
    console.log(square);
  }, [square]);

  return (
    <div>
        {square.map((value, index) => (
          <React.Fragment key={index}>
            <button style={InternalStyle} onClick={() => handleClick(index)}>
              {value}
            </button>
            {(index + 1) % 3 === 0 && <br />}
          </React.Fragment>
        ))}
         <GameState square={square}></GameState>
    </div>
  );
}
