// Randomly place 10 bombs on the board without it placing multiple bombs in one cell
// math.random() for each row and column
// loop though the grid and if statement to check if theres a bomb
// stop the loop when 10 bombs are placed

export function placeMines(board, mineCount = 10) {
    let bombsPlanted = 0;
    // An index of board is a row
    const rows = board.length;
    // With in the row are indexes for the column
    const columns = board[0].length;
    // Loop through board to place mines randomly
    while(bombsPlanted < mineCount) {
        const randomRow = Math.floor(Math.random() * rows);
        const randomColumns = Math.floor(Math.random() * columns)
        // if statement to check if theres a bomb in the cell and to skip if true
        if(!board[randomRow][randomColumns].isBomb) {
            board[randomRow][randomColumns].isBomb = true;
            bombsPlanted++;
        }
    }
    return board
};