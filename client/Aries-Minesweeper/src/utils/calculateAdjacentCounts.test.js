import { generateBoard } from "./generateBoard";
import { placeMines } from "./placeMines";
import { calculateAdjacentCounts } from "./calculateAdjacentCounts";
import { describe, expect, test } from "vitest";

describe("Testing for counting neighbor cells with mines", () => {
    const board = generateBoard();
    test("Bomb cells keep adjacentCount = 0", () => {
        placeMines(board);
        calculateAdjacentCounts(board);
        board.flat().forEach(cell => {
            if(cell.isBomb) {
                expect(cell.adjacentCount).toBe(0)
            }
        });
    });
    test("Cells with no bomb have correct adjacent counts", () => {
        board[1][1].isBomb = true;
        calculateAdjacentCounts(board);
        expect(board[0][0].adjacentCount).toBe(1);
        expect(board[1][0].adjacentCount).toBe(1);
        expect(board[2][2].adjacentCount).toBe(1);
    })
})