import React from "react";
import Board from "./Board";
import explosionIcon from "../assets/explosionIcon.png";
import styled from "styled-components";
import flagIcon from "../assets/flagIcon.jpeg";

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

    background-color: ${props => props.$revealed ? "#ddd" : "#999"};
`;


function Cell({ cell, row, column, onClick, onRightClick }) {
    let displayValue = "";

    if(!cell.isRevealed && cell.isFlagged){
        displayValue = <StyledImg src={flagIcon} alt="flag"/>;
    }
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
            <StyledCell 
                onClick={() => onClick(row, column)} 
                $revealed = {cell.isRevealed} 
                onContextMenu={(rightClick) => onRightClick(row, column, rightClick)}
            >
                { displayValue }
            </StyledCell>
            
        </>
    )
}

export default Cell;