import { useState } from "react"
import { Board } from "./Component/Board"
function App() {
  const [gameState, setGameState] = useState("X");
  return (
    <>
      <Board gameState = {gameState} setGameState = {setGameState}></Board>
    </>
  )
}
export default App
