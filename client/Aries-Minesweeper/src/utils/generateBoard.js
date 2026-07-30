// Create the empty board with a 10x10 grid
// Each cell of the grid should have a row number, columnn number,
// isBomb with a default of false to denote there be no bomb at the start for each cell
// isRevealed, default to false,
// adjacentCount, default to 0,
// isFlagged, default to false
// Create a loop statement to create 100 cells to form 10x10 grid

export function generateBoard(rows = 10, columns = 10) {
    const board = [];
    for(let r = 0; r < rows; r++){
        const row = [];
        for(let c = 0; c < columns; c++){
            row.push({
                row: r,
                column: c,
                isBomb: false,
                isRevealed: false,
                adjacentCount: 0,
                isFlagged: false,
            });
        }
        board.push(row);
    }
    return board;
};