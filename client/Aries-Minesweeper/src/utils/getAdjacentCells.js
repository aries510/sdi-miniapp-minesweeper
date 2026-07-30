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
        for(let j = 0; j < rows; j++) {
            let offsetRow =+ rows;
            for(let k = 0; k < columns; k++) {
                let offsetColumn =+ columns;
                if()
            }
        }
    }
};