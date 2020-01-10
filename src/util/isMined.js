//!!!!!!!!!!!!!!!!!!DELETE!!!!!!!!!!!!!!!!!!!!!!
// check if cell is mined or not.
// 'board' - is an object with our cells

export const isMined = (board, id) => {
    let cell = board[id],
        mined = 0;
    
    if (typeof cell !== 'undefined') {
        mined = cell.isMined ? 1 : 0;        
    }

    return mined;
}