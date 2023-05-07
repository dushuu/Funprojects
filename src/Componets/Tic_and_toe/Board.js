import React from "react";
import Box from "./Box";
import "./Boars.scss";

const Board = ({ board, onClick, color,ResectGame }) => {
  return (
    <div className="board">
      {board.map((value, idx) => {
        return (
            
          <Box
            value={value}
            key={idx}
            onClick={() => value === null && onClick(idx)}
            color={color}
            id={idx}
    
          />

        );

      })}

     
{/* <button className="reset-btn" onClick={() =>ResectGame(board)}>Reset</button> */}
    </div>
    
   
  );
};

export default Board;
