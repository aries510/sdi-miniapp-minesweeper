import { useState, useEffect } from "react";
import { generateBoard } from "../utils/generateBoard";
import { placeMines } from "../utils/placeMines";
import { calculateAdjacentCounts } from "../utils/calculateAdjacentCounts";
import { revealCells } from "../utils/revealCells";
import Cell from "./Cell";
import styled from "styled-components";

const BoardWrapper = styled.div`
    display: inline-block;
`;

const Row = styled.div`
    display: flex;
`;

function Board() {
    const [board, setBoard] = useState([]);

    useEffect(() => {
        const initialBoard = generateBoard();
        placeMines(initialBoard);
        calculateAdjacentCounts(initialBoard);
        setBoard(initialBoard);
    }, []);

    const cellClickHandler = (row, column) => {
        const clickedCellRevealed = revealCells(board, row, column);
        setBoard([...clickedCellRevealed])
    };

    return (
        <BoardWrapper className="board">
            {board.map((row, rowIndex) => {
                return (
                    <Row key={ rowIndex } className="board-row">
                        {row.map((cell, columnIndex) => {
                            return (
                                <Cell
                                    key={ columnIndex }
                                    cell={ cell }
                                    row={ rowIndex }
                                    column={ columnIndex }
                                    onClick={ cellClickHandler }
                                />
                            );
                        })}
                    </Row>
                );
            })}
        </BoardWrapper>
    );
};

export default Board;