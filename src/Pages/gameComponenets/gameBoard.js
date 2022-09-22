import React , {useEffect, useState} from "react";
//import '../App.css';
import Cell from './gameCell';


function GameBoard(props) {
    const boardSizeX = 4;
    const boardSizeY = 4;

    const [board, setBoard] = useState(new Array(boardSizeX * boardSizeY).fill(0));
    

    //setBoard(new Array(boardSizeX * boardSizeY).fill(0));
    
    const oreSpots = 2;
    let orePlaced = 0;
    let grid = [];
    let newboard= new Array(boardSizeX * boardSizeY).fill(0);

    const fillBoard = (()=> {
        
        while(orePlaced < oreSpots) {
            newboard[Math.floor(Math.random() * (board.length + 1))] = 1;
            
            orePlaced++;
            
            
        };
        //setBoard(newboard);
        
        //return(newboard)

    });
    
    

    const fillGrid = (()=> {
        let index = 0
        for(let y = 0; y < boardSizeY; y++) {
            for(let x=0; x < boardSizeX; x++){
                let props = {
                    x: x,
                    y: y,
                    value: board[index],
                    key: index 
                };
                grid.push(<Cell stats={props} key={props.key} />)
                index++;
            }

        };
        return(grid)
    });

    //fillBoard();
    fillGrid();



    useEffect(() => {
        fillBoard();
        //fillGrid();
        setBoard(newboard);
    },[])

    return(
        <>
            {console.log(newboard, grid, board)}
            {board}
            {newboard}
            
            {grid}
        
        </>
        
        
        
        
    )
};

export default GameBoard