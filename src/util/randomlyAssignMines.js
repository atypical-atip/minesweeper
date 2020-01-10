import { getRandInt } from './getRandInt';

//Randomly assign mines to cells
let cell;

const getRandCoord = (boardSize) => {
    let randomRowCoordinate = getRandInt(0, boardSize);
    let randomColumnCoordinate = getRandInt(0, boardSize);
    cell = `${randomRowCoordinate}${randomColumnCoordinate}`;
}

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