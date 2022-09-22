import React from "react";

export default function TutCell({details, updateFlag, revealCell}) {
    const style = {
        cellStyle: {
            width: 40, height: 40, backgroundColor: 'grey', border: '1px solid white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '20px',
        },
    }
    const handleClick = () => {
        console.log(details);
        revealCell(details.x , details.y)
    }

    return (
        <div style={style.cellStyle} onClick={handleClick} onContextMenu={(e)=> updateFlag(e, details.x, details.y)}>
            {details.revealed ?  details.value : ""}
        </div>
    )
}


