import React from 'react'
import Square from './Square'

function Board({squares, onClick}) {
  console.log(squares)
  return (
    <div className="board">
      {
        (squares || []).map( (square, i) => (
          <Square 
            key={i}
            value={square}
            onClick={() => onClick(i)}
          />
        ))
      }
    </div>
  )
}

export default Board
