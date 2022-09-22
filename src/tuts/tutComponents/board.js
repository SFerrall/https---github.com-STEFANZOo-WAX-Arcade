import React, {useState, useEffect} from 'react';
import CreateBoard from '../util/createBoard';
import TutCell from './cell';
import { revealed } from '../util/revealCell';
import {FaFlag , FaBomb} from 'react-icons/fa'

function Board() {
    const [grid, setGrid] = useState([]);
    const [nonMineCount, setNonMineCount] = useState(0);
    const [mineLocation, setMineLocation] = useState([]);

    const style={display: 'flex', flexDirection: 'row',};

    useEffect(()=>{
        function freshBoard(){
            const newBoard = CreateBoard(10,10,20);
            setNonMineCount(10*10 - 20);
            setMineLocation(newBoard.mineLocation);
            setGrid(newBoard.board);
        }
        freshBoard();
        console.log(grid);
    },[]);

    const updateFlag = (e,x,y)=> {
        e.preventDefault();
        //deep copy
        let newGrid = JSON.parse(JSON.stringify(grid));
        newGrid[x][y].flagged = true;
        //newGrid[x][y].icon = <FaFlag />;
        setGrid(newGrid);
        console.log('Right Click' , newGrid[x][y], grid[x][y]);
    };

    const revealCell = (x,y) => {
        let newGrid = JSON.parse(JSON.stringify(grid));
        if(newGrid[x][y].value === "X"){
            alert("clicked on mine!");
            for(let i = 0; i < mineLocation.length; i++){
                newGrid[mineLocation[i][0]][mineLocation[i][1]].revealed = true;
            }
            setGrid(newGrid);
        }
        else{
            let revealedBoard = revealed(newGrid, x, y, nonMineCount)
            setGrid(revealedBoard.arr);
            setNonMineCount(revealedBoard.newNonmines);
        }
    };

    return(
        <div className="parent">
            <div style={{color: 'green' , textAlign: "center" , fontSize: '35px'}}>Non-Mines: {nonMineCount}</div>
            <div>
                {grid.map((x , index1) => {
                    return (
                        <div style={style} key={index1}>
                            {x.map((singleCol, index2)=>{
                                return <TutCell details={singleCol} updateFlag={updateFlag} revealCell={revealCell} key={index2} />
                            })}
                        </div>
                    )
                })}
            </div>           
        </div>
    )
}

export default Board;

/*
<div style={{width:30,height:30,padding:'5px',border: '3px solid red'}} >
                                        {JSON.stringify(singleCol.value)}
                                        </div>


*/