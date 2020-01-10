// Get neighbors of cell

//Check if cell id exists in board object
const checkAndPushCell = (board, id, targetArray) => {
    if (board[id]) {
        targetArray.push(board[id]);
    } else {
        return
    }
}

//argument board - object from state with 'cells'
export const getNeighbors = (board, id) => {
        let row = parseInt(board.id.row),
            col = parseInt(board.id.column),
            neighbors = [];
        console.log(board);
        checkAndPushCell(board, `${row - 1}${col - 1}`, neighbors);
        checkAndPushCell(board, `${row - 1}${col}`, neighbors);
        checkAndPushCell(board, `${row - 1}${col + 1}`, neighbors);
        checkAndPushCell(board, `${row}${col + 1}`, neighbors);
        checkAndPushCell(board, `${row}${col - 1}`, neighbors);
        checkAndPushCell(board, `${row + 1}${col - 1}`, neighbors);
        checkAndPushCell(board, `${row + 1}${col}`, neighbors);
        checkAndPushCell(board, `${row + 1}${col + 1}`, neighbors);

        return neighbors;
        // neighbors.push( board[`${row - 1}${col - 1}`] );
        // neighbors.push( board[`${row - 1}${col}`] );
        // neighbors.push( board[`${row - 1}${col + 1}`] );
        // neighbors.push( board[`${row}${col + 1}`] );
        // neighbors.push( board[`${row}${col - 1}`] );
        // neighbors.push( board[`${row + 1}${col - 1}`] );
        // neighbors.push( board[`${row + 1}${col}`] );
        // neighbors.push( board[`${row + 1}${col + 1}`] );
}