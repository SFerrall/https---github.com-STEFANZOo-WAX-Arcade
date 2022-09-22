export const checkForBestTime = (rows , seconds, minesweeper) =>{
    switch(rows){
        case 10:
            if(seconds < minesweeper.beginnerBestTime){
                return 1
                break;
            }
            else{
                return 0;
                break;
            }
        case 16:
            if(seconds < minesweeper.intermediateBestTime){
                return 2
                break
            }else{
                return 0;
                break;
            }
        case 30:
            if(seconds < minesweeper.expertBestTime){
                return 3;
                break;
            }else{
                return 0;
                break
            }
    }
}