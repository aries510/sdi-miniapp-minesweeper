import { generateBoard } from "./generateBoard";
import { getAdjacentCells } from "./getAdjacentCells";
import { describe, expect, test } from "vitest";

describe("Testing for adjacent cell function", () => {
    const board = generateBoard();
    
    test("Test for a corner cell with 3 neighbors", () => {
        const neighbors = getAdjacentCells(board, 0, 0);
        expect(neighbors.length).toBe(3)
    });
    test("Test for edge cell with 5 neighbors", () => {
        const neighbors = getAdjacentCells(board, 0, 5);
        expect(neighbors.length).toBe(5)
    });
    test("Rest of cells with 8 neighbors", () => {
        const neighbors = getAdjacentCells(board, 5, 5);
        expect(neighbors.length).toBe(8);
    })
}) 