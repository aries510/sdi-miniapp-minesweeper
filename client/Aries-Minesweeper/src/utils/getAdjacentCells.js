export function getAdjacentCells(board, row, column) {
    const neighbors = [];
    const rows = 10;
    const columns = 10;
    const possibleNeighborPositions = 
    [
        [-1, -1],
        [-1, 0],
        [-1, +1],
        [0, -1],
        [0, +1],
        [+1, -1],
        [+1, 0],
        [+1, +1]

    ];

    for(let i = 0; i < possibleNeighborPositions.length; i++) {
        const [offsetRow, offsetColumn] = possibleNeighborPositions[i];
        const neighborRow = offsetRow + row;
        const neighborColumn = offsetColumn + column;
        if(neighborRow >= 0 && neighborRow < rows && neighborColumn >= 0 && neighborColumn < columns) {
            neighbors.push(board[neighborRow][neighborColumn])
        }
    }
    return neighbors
};