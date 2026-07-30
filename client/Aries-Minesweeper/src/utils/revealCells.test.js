import { generateBoard } from "./generateBoard";
import { revealCells } from "./revealCells";
import {describe, expect, test } from "vitest";


describe("Testing for revealing cells function", () => {
    const board = generateBoard();
    test("reveals a single numbered cell", () => {
        board[2][2].adjacentCount = 3;
        board[2][2].isBomb = false;

        revealCells(board, 2, 2);

        expect(board[2][2].isRevealed).toBe(true)
    });
    test("reveals zero cell and its neighbors", () => {
        board[5][5].adjacentCount = 0;
        board[5][4].adjacentCount = 1;
        board[5][6].adjacentCount = 0;
        board[4][5].adjacentCount = 0;
        board[6][5].adjacentCount = 2;
        revealCells(board, 5, 5)

        expect(board[5][5].isRevealed).toBe(true);
        expect(board[5][4].isRevealed).toBe(true);
        expect(board[5][6].isRevealed).toBe(true);
        expect(board[4][5].isRevealed).toBe(true);
        expect(board[6][5].isRevealed).toBe(true);
    })
})