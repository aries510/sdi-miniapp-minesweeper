import React from "react";
import Board from "./Board";
import explosionIcon from "../assets/explosionIcon.png";


function Cell({ cell, row, column, onClick }) {
    let displayValue = "";

    if(cell.isRevealed) {
        if(cell.isBomb) {
            displayValue = <StyledImg src={explosionIcon} alt="bomb-explosion"/>;
        } else if(cell.adjacentCount > 0) {
            displayValue = cell.adjacentCount
        } else {
            displayValue = "";
        }
    };

    return (
        <>
            <div onClick={() => onClick(row, column)}></div>
        </>
    )
}

export default Cell;