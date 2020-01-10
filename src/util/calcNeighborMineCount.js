import getNeighbors from './getNeighbors';
import { isMined } from './isMined';

// Calculate mines in neighbor cells

export const calcNeighborMineCount = (board, boardSize) => {
    let cell,
        neighborMineCount = 0;

    for (let row = 0; row < boardSize; row++) {
        
        for (let column = 0; column < boardSize; column++) {
            let id = `${row}${column}`;
            cell = board[id];

            if (!cell.mined) {
                let neighbors = getNeighbors(board, cell)
                neighborMineCount = 0;

                for (let i = 0; i< neighbors.length; i++) {
                    neighborMineCount += isMined(board, row, column);
                }

                cell.neighborMineCount = neighborMineCount;
            }
        }
    }

    return board;
}