import React, { useState, useEffect } from "react";

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
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
  
    for (const line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]; // Returns 'X' or 'O' if there is a winner
      }
    }
    return null; // Returns null if there is no winner
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
    let winner = calculateWinner(square);
    if(winner) {
      console.log(winner + " "+" is the winner of the game");
      setSquare(Array(9).fill(null));
    }
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
        ))};
    </div>
  );
}
