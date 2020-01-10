// Get neighbors of cell

//Check if cell id exists in board object
const checkAndPushCell = (board, row, col, targetArray) => {
    if (row >= 0 && col >= 0 && board[`${row}${col}`]) {
        targetArray.push(board[`${row}${col}`]);
    }
}

//argument board - object from state with 'cells'
export const getNeighbors = (board, cell) => {
    
        let row = parseInt(board[cell].row),
            col = parseInt(board[cell].column),
            neighbors = [];
        
        //row - 1
        let newRow = row - 1;
        let newCol = col - 1;
        checkAndPushCell(board, newRow, newCol, neighbors); 
        
        newCol = col;
        checkAndPushCell(board, newRow, newCol, neighbors);
        
        newCol = col + 1;
        checkAndPushCell(board, newRow, newCol, neighbors);
        
        //newRow = row
        newRow = row;
        newCol = col - 1;
        checkAndPushCell(board, newRow, newCol, neighbors);

        newCol = col + 1;
        checkAndPushCell(board, newRow, newCol, neighbors);
        
        //row + 1
        newRow = row + 1;
        checkAndPushCell(board, newRow, newCol, neighbors);

        newCol = col - 1;
        checkAndPushCell(board, newRow, newCol, neighbors);

        newCol = col;
        checkAndPushCell(board, newRow, newCol, neighbors);
        // checkAndPushCell(board, `${row - 1}${col - 1}`, neighbors);
        // checkAndPushCell(board, `${row - 1}${col}`, neighbors);
        // checkAndPushCell(board, `${row - 1}${col + 1}`, neighbors);
        // checkAndPushCell(board, `${row}${col + 1}`, neighbors);
        // checkAndPushCell(board, `${row}${col - 1}`, neighbors);
        // checkAndPushCell(board, `${row + 1}${col - 1}`, neighbors);
        // checkAndPushCell(board, `${row + 1}${col}`, neighbors);
        // checkAndPushCell(board, `${row + 1}${col + 1}`, neighbors);

        return neighbors;
}