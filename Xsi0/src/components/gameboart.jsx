 import Square from "./square";
import React, { useState } from "react";
import ShowWinner from "./winner";

 function GameBoard(props){

    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const [winner, setWinner] = useState(null);

    

    //vreau sa stiu cine a castigat 
    // gen scrie winner: X sau winner: 0 => functie de genu calculateWinner() care intoarce x sau 0
    const calculateWinner = function (squares) {

        for(let i = 0; i<= 3; i++){

            if(squares[i * 3] && squares[i * 3] === squares[i * 3 + 1] && squares[i * 3] === squares[i * 3 + 2]) {

                return squares[i * 3]; 

              }
            }

            for (let i = 0; i < 3; i++) {

              if (squares[i] && squares[i] === squares[i + 3] && squares[i] === squares[i + 6]) {

                return squares[i]; 

              }
            }
        
            if (squares[0] && squares[0] === squares[4] && squares[0] === squares[8]) {

              return squares[0]; 

            }
        
            if (squares[2] && squares[2] === squares[4] && squares[2] === squares[6]) {

              return squares[2]; 

            }
        
            return null; 
          };
        


    

    const handleClick = function (index) {

        //daca dau click pe o casuta care are deja valoare => return din funvtier

        if(squares[index]){
            return;
        }
        
        //trb modif stateul nostru de patrate in functie de index primiy ca argument

        let modifiedSquares = squares.slice();

        if(isXNext){
            modifiedSquares[index] = 'X';
        }
        else{
            modifiedSquares[index] = '0';
        }

        setSquares(modifiedSquares); 
        setIsXNext(!isXNext);

        const winnerGame = calculateWinner(modifiedSquares);

        if(winnerGame){
            setWinner(winnerGame);
        }

    }

    return <> 
        <div className="bord">
    
        <ShowWinner winner={winner}/>
            
        <div id="gameBoard">
       
            {squares.map((value,index) => (
                <Square key={index} value={value} onClick={() => handleClick(index)}/>
            ))}
        </div></div>
    </>
    
}

export default GameBoard;






// let arrayBoard = Array(9).fill(null); //[null, ...., x9];

    // return <>
    //     <div id = "gameBoard">
    //         {arrayBoard.map((cell) => {
    //             return <Square value = {cell} onClick = {}/>

    //         })}
    //     </div>
    
    // </>