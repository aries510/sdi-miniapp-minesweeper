import { getAdjacentCells } from "./getAdjacentCells";

export function revealCells(board, row, column) {
    const currentCell = board[row][column];
    if(currentCell.isRevealed) {
        return board
    };
    currentCell.isRevealed = true;
    if(currentCell.isBomb) {
        return board
    };
    if(currentCell.adjacentCount > 0) {
        return board
    };
    if(currentCell.adjacentCount === 0) {
        const allNeighbors = getAdjacentCells(board, row, column);
        for(let i = 0; i < allNeighbors.length; i++) {
            if(!allNeighbors[i].isRevealed) {
                revealCells(board, allNeighbors[i].row, allNeighbors[i].column)
            };
        };
    };
    return board
};