import { getAdjacentCells } from "./getAdjacentCells";

export function calculateAdjacentCounts(board) {
    const totalRows = 10;
    const totalColumns = 10;

    for(let row = 0; row < totalRows; row++){
        for(let column = 0; column < totalColumns; column++) {
            const currentCell = board[row][column];
            if(currentCell.isBomb) {
                currentCell.adjacentCount = 0
            };
            const allNeighbors = getAdjacentCells();
            let counter = 0;
            for(let i = 0; allNeighbors.length; i++) {
                if(allNeighbors.isBomb) {
                    counter++
                };
            };
            currentCell.adjacentCount = counter;
        };
    };
    return board
};