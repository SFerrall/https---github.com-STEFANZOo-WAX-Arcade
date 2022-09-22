export const revealed = (arr, x, y, newNonmines) => {
    let show = [];
    show.push(arr[x][y]);

    while(show.length != 0){
        let one = show.pop();
        let i = one.x;
        let j = one.y;
        if(!one.revealed){
            newNonmines--;
            one.revealed = true;
        }
        if(one.value !== 0){
            break;
        }
        //top-left
        if(i > 0 && j > 0 && arr[i-1][j-1].value === 0 && !arr[i-1][j-1].revealed){
            show.push(arr[i-1][j-1]);
        }
        //bottom-right
        if(i < arr.length -1 && j < arr[0].length -1 && arr[i+1][j+1].value === 0 && !arr[i+1][j+1].revealed){
            show.push(arr[i+1][j+1])
        }
        //top-right
        if(i > 0 && j < arr[0].length -1 && arr[i-1][j+1].value === 0 && !arr[i-1][j+1].revealed){
            show.push(arr[i-1][j+1]);
        }
        //bottom-left
        if(i < arr.length - 1 && j > 0 && arr[i+1][j-1].value === 0 && !arr[i+1][j-1].revealed){
            show.push(arr[i+1][j-1]);
        }
        //top
        if(i > 0 && arr[i-1][j].value === 0 && !arr[i-1][j].revealed){
            show.push(arr[i-1][j]);
        }
        //right
        if(j < arr[0].length -1 && arr[i][j+1].value === 0 && !arr[i][j+1].revealed){
            show.push(arr[i][j+1]);
        }
        //bottom
        if(i < arr.length -1 && arr[i+1][j].value === 0 && !arr[i+1][j].revealed){
            show.push(arr[i+1][j]);
        }
        //left
        if(j > 0 && arr[i][j-1].value === 0 && !arr[i][j-1].revealed){
            show.push(arr[i][j-1]);
        }


        //start reveal
        if(i > 0 && j > 0 && !arr[i-1][j-1].revealed){
            //top-left reveal
            arr[i-1][j-1].revealed = true;
            newNonmines--;
        }
        if(j > 0 && !arr[i][j-1].revealed){
            //left-reveal
            arr[i][j-1].revealed = true;
            newNonmines--;
        }
        if(i < arr.length -1 && j > 0 && !arr[i+1][j-1].revealed){
            //bottom-left reveal
            arr[i+1][j-1].revealed = true;
            newNonmines--;
        }
        if(i > 0 && !arr[i-1][j].revealed){
            //top reveal
            arr[i-1][j].revealed = true;
            newNonmines--;
        }
        if(i < arr.length -1 && !arr[i+1][j].revealed){
            //bottom reveal
            arr[i+1][j].revealed = true;
            newNonmines--;
        }
        if(i > 0 && j < arr[0].length -1 && !arr[i-1][j+1].revealed){
            //top-right reveal
            arr[i-1][j+1].revealed = true;
            newNonmines--;
        }
        if(j < arr[0].length - 1 && !arr[i][j+1].revealed){
            //right reveal
            arr[i][j+1].revealed = true;
            newNonmines--;
        }
        if(i < arr.length -1 && j < arr[0].length -1 && !arr[i+1][j+1].revealed){
            //bottom-right reveal
            arr[i+1][j+1].revealed = true;
            newNonmines--;
        }
    }

    return {arr, newNonmines}
}