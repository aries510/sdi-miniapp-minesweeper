import { describe, expect, test } from "vitest";
import { generateBoard } from "./generateBoard";
import { placeMines } from "./placeMines";

describe("Test function for 10 bombs planted", () => {
    test("10 bombs planted", () => {
        const board = generateBoard();
        const plantedMines = placeMines(board);
        const mineCount = plantedMines.flat().filter(cell => cell.isBomb).length
        expect(mineCount).toBe(10)
    });
    // edge case where the mine may get planted off the grid
    test("Testing to make sure no mines are planted off the board when scaling board", () => {
        const board = generateBoard();
        const plantedMines = placeMines(board)

        plantedMines.forEach(row => {
            row.forEach(cell => {
                expect(cell.row).toBeGreaterThanOrEqual(0);
                expect(cell.row).toBeLessThan(10);
                expect(cell.column).toBeGreaterThanOrEqual(0);
                expect(cell.column).toBeLessThan(10)
            })
        });
    })
})