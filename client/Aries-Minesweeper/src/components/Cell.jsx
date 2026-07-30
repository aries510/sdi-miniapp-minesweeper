import React from "react";
import Board from "./Board";
import explosionIcon from "../assets/explosionIcon.png";
import styled from "styled-components"

const StyledImg = styled.img`
    width: 20px;
    height 20px;
    pointer-events: none;
`;
const StyledCell = styled.div`
    width: 32px;
    height: 32px;
    border: 1px solid #444;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;


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
            <StyledCell onClick={() => onClick(row, column)}>
                { displayValue }
            </StyledCell>
        </>
    )
}

export default Cell;