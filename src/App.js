import Header from './components/header/Header';
import './App.css';
import Card from './components/card/Card';
import React,{useEffect, useState} from 'react';
import Modal from './components/modal/Modal';
function App() {
  const [player, setPlayer] = useState('X') 
  const [reset, setReset] = useState(false)
  const [board, setBoard] = useState(["","","","","","","","",""])
  const [gameOver, setGameOver] = useState(false)
  
  
  function handleReset(){
    setReset(true)
    setGameOver(false)
    
  }

  useEffect(()=>{
    setBoard(["","","","","","","","",""])
    setReset(false)
  },[reset])

  

 
  function handleClick(index){
    if(gameOver === true )return null
    if(board[index] !== "") return null
    setBoard(board.map((item, itemIndex) => itemIndex === index ? player : item))

    setPlayer(player === "O" ? "X" : "O")
    
    
  }
  
  const win = ()=>{
    const winState = [
      [board[0],board[1],board[2]],
      [board[3],board[4],board[5]],
      [board[6],board[7],board[8]],

      [board[0],board[3],board[6]],
      [board[1],board[4],board[7]],
      [board[2],board[5],board[8]],

      [board[0],board[4],board[8]],
      [board[2],board[4],board[6]],
    ]
    winState.forEach(cards=>{
      if(cards.every(card => card === "O")){
        setGameOver(true)
        setPlayer("O")
        return console.log("O venceu")
      } 
      if(cards.every(card => card === "X")){
        setGameOver(true)
        setPlayer("X")
        return console.log("X venceu")
      }  
    })
  }
  useEffect(win,[board])
  return (
    <div className="App">
      <Header handleReset={handleReset}></Header>
      <div className='game' >
        <div className='cards'>
          {board.map((item, index)=>(
            <Card key={index} index={index}  item={item} handleClick={handleClick}></Card>
          ))}
        </div>
        <Modal gameOver={gameOver} player={player}></Modal>
      </div>
    </div>
  );
}

export default App;
