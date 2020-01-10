import { getNeighbors } from './getNeighbors';
// import { isMined } from './isMined';

// Calculate mines in neighbor cells

export const calcNeighborMineCount = (board, boardSize) => {
    
    Object.keys(board).map(key => {
        let cell = board[key],
            mineCounter = 0;
        

        if (!cell.isMined) {
            //Reset mine counter
            mineCounter = 0;
            //Get neighbors as array
            let neighbors = getNeighbors(board, cell.id);
            
            //Map array and increase mine counter each time when neighbor is mined
            neighbors.map(item => {
                if (item.isMined) {
                    mineCounter++
                }
            //Assign number of mined neighbors to appropriate obj key
            cell.neighborMineCount = mineCounter;            
            });
        }
    })
    //!!!!!!!!!!!!!!DELETE!!!!!!!!!!!!!!!!!!!!!!!!!
    // for (let row = 0; row < boardSize; row++) {
        
    //     for (let column = 0; column < boardSize; column++) {
    //         let id = `${row}${column}`;
    //         cell = board[id];
            
    //         if (!cell.isMined) {
    //             let neighbors = getNeighbors(board, cell.id);                
    //             neighborMineCount = 0;                
 
    //             for (let i = 0; i < neighbors.length; i++) {
    //                 neighborMineCount += isMined(neighbors, cell.id);
    //             }

    //             cell.neighborMineCount = neighborMineCount;                
    //         }
    //     }
    // }

    return board;
}