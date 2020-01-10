import { getRandInt } from './getRandInt';

//Randomly assign mines to cells
let cell;

//Get random coordinates helper function
const getRandCoord = (boardSize) => {
    let randomRowCoordinate = getRandInt(0, boardSize);
    let randomColumnCoordinate = getRandInt(0, boardSize);
    cell = `${randomRowCoordinate}${randomColumnCoordinate}`;
}

//Assign mines to cells. All args come from App.jsx
export const randomlyAssignMines = (board, boardSize, mineCount) => {
    let mineCoordinates = [];
    
    for (let i = 0; i < mineCount; i++) {
        getRandCoord(boardSize);
        
        while( mineCoordinates.includes(cell) ) {
            getRandCoord(boardSize);
        }

        mineCoordinates.push(cell);
        board[cell].isMined = true;        
    }
    
    return board;
}

export default randomlyAssignMines;