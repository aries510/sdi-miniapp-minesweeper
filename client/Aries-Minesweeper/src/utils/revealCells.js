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
    const allNeighbors = getAdjacentCells(board, row, column);
    for(let neighbors of allNeighbors) {
        if(!neighbors.isRevealed && neighbors.adjacentCount === 0) {
            revealCells(board, neighbors.row, neighbors.column);
        };
        if(!neighbors.isRevealed && neighbors.adjacentCount > 0) {
            neighbors.isRevealed = true;
        };
    };
    return board
};