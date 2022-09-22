import React, {useState , useEffect} from "react";
import './gameCell.css';

function Cell(props)  {
    //const [x, setX] = useState(props.x);
    //const [y, setY] = useState(props.y);
    //const [value, setValue] = useState(props.value);
    //const [key, setKey] = useState(props.key);

    //setX(props.x);
    //setY(props.y);
    //setValue(props.value);
    

    //let temp;



    const handleClick = (()=> {
        //temp = props.stats.x;
        console.log("click", props.stats )
    })

    return(
        <>
            <div></div>
            <div className="Cell" onClick={handleClick}> ? </div>
        </>
        
    )

}



export default Cell;