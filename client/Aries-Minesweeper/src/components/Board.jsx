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
        if(board[row][column].isFlagged){
            return
        };
        const clickedCellRevealed = revealCells(board, row, column);
        setBoard([...clickedCellRevealed])
    };

    const flagCellClickHandler = (row, column, rightClick) => {
        rightClick.preventDefault();
        const currentBoard = [...board];
        const cell = currentBoard[row][column];
        if(cell.isRevealed){
            return
        }
        cell.isFlagged = !cell.isFlagged
        setBoard([...currentBoard])
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
                                    onRightClick={ flagCellClickHandler }
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