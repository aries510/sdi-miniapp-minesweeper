import { generateBoard } from "./generateBoard";
import { describe, test, expect} from "vitest"

describe("Initial tests for the minesweeper board", () => {
    const board = generateBoard();
    test("Testing the starting board function", () => {
        expect(board.length).toBe(10);
        expect(board[0].length).toBe(10);
    });
    test("Testing cells to have correct objects", () => {
        const cell = board[0][0];
        expect(cell.isBomb).toBe(false);
        expect(cell.isRevealed).toBe(false);
        expect(cell.adjacentCount).toBe(0);
        expect(cell.isFlagged).toBe(false)
    });
})