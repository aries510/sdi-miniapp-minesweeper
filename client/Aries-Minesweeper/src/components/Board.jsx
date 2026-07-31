import { useState, useEffect } from "react";
import { generateBoard } from "../utils/generateBoard";
import { placeMines } from "../utils/placeMines";
import { calculateAdjacentCounts } from "../utils/calculateAdjacentCounts";
import { revealCells } from "../utils/revealCells";
import Cell from "./Cell";
import styled from "styled-components";

const BoardContainer = styled.div`
  background: ${({ theme }) => theme.whiteArmor};
  padding: 20px;
  border-radius: 8px;

  box-shadow:
    inset 0 0 0 2px ${({ theme }) => theme.panelLine},
    inset 0 0 20px ${({ theme }) => theme.metalGray};

  background-image: linear-gradient(
    135deg,
    rgba(255,255,255,0.1) 0%,
    rgba(0,0,0,0.05) 100%
  );
`;

const BoardWrapper = styled.div`
    display: inline-block;
`;

const Row = styled.div`
    display: flex;
    `;

function Board({restart}) {
    const [board, setBoard] = useState([]);
    const [gameOver, setGameOver] = useState(false);
    const [gameWon, setGameWon] = useState(false);

    useEffect(() => {
        const initialBoard = generateBoard();
        placeMines(initialBoard);
        calculateAdjacentCounts(initialBoard);
        setBoard(initialBoard);
    }, []);

    const winCondition = (board) => {
        for(let row of board) {
            for(let cell of row) {
                if(!cell.isBomb && !cell.isRevealed) {
                    return false
                };
            };
        };
        return true
    };

    const cellClickHandler = (row, column) => {
        const currentCell = board[row][column];
        const clickedCellRevealed = revealCells(board, row, column);
        if(gameOver === true || gameWon === true){
            return
        };
        if(currentCell.isFlagged){
            return
        };
        if(currentCell.isBomb) {
            setBoard([...clickedCellRevealed])
            setGameOver(true)
            return
        };
        setBoard([...clickedCellRevealed]);
        if(winCondition(board)) {
            setGameWon(true)
        };
    };

    const flagCellClickHandler = (row, column, rightClick) => {
        rightClick.preventDefault();
        const currentBoard = [...board];
        const cell = currentBoard[row][column];
        if(gameOver === true || gameWon === true) {
            return
        };
        if(cell.isRevealed){
            return
        }
        cell.isFlagged = !cell.isFlagged
        setBoard([...currentBoard])
    };

    return (
        <BoardWrapper className="game-board">
            {gameOver && (
                <div>
                    <h1>GAME OVER</h1>
                    <button onClick={restart}>TRY AGAIN</button>
                </div>
            )}
            {gameWon && (
                <div>
                    <h1>WINNER</h1>
                    <button onClick={restart}>NEW GAME</button>
                </div>
            )}
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
                )
            })}
        </BoardWrapper>
    );
};

export default Board;
