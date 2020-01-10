// check if cell is mined or not.
// 'board' - is an object with our cells

export const isMined = (board, row, col) => {
    let cell = board[`${row}${col}`],
        mined = 0;
    
    if (typeof cell !== 'undefined') {
        mined = cell.mined ? 1 : 0;
    }

    return mined;
}