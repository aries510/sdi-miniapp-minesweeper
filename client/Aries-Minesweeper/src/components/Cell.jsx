import React from "react";
import Board from "./Board";
import explosionIcon from "../assets/explosionIcon.png";
import styled from `styled-components`

const StyledImg = style.img`
    width: 20px;
    height 20px;
    pointer-events: none;
`


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