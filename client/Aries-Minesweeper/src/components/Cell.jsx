import React from "react";
import Board from "./Board";
import explosionIcon from "../assets/explosionIcon.png";
import styled from "styled-components";
import flagIcon from "../assets/flagIcon.jpeg";

export const GameOverBanner = styled.div`
  background: ${({ theme }) => theme.primaryRed};
  color: ${({ theme }) => theme.uiText};

  padding: 20px;
  text-align: center;
  border-radius: 6px;

  background-image: repeating-linear-gradient(
    45deg,
    ${({ theme }) => theme.primaryRed},
    ${({ theme }) => theme.primaryRed} 10px,
    ${({ theme }) => theme.warningOrange} 10px,
    ${({ theme }) => theme.warningOrange} 20px
  );
`;

export const WinBanner = styled.div`
  background: ${({ theme }) => theme.primaryBlue};
  color: ${({ theme }) => theme.primaryYellow};

  padding: 20px;
  text-align: center;
  border-radius: 6px;

  box-shadow: 0 0 20px ${({ theme }) => theme.primaryBlue};
`;

export const Flag = styled.div`
  width: 20px;
  height: 20px;

  background: ${({ theme }) => theme.primaryYellow};
  border-radius: 3px;

  box-shadow: 0 0 4px ${({ theme }) => theme.panelLine};
`;

export const Bomb = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;

  background: ${({ theme }) => theme.primaryRed};

  box-shadow:
    0 0 10px ${({ theme }) => theme.primaryRed},
    0 0 20px ${({ theme }) => theme.warningOrange};

  animation: pulse 1s infinite alternate;

  @keyframes pulse {
    from { transform: scale(1); }
    to { transform: scale(1.15); }
  }
`;

export const StyledCell = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  text-shadow: 0 0 2px rgba(0,0,0,0.4);

  cursor: pointer;
  user-select: none;

  background: ${({ theme, $revealed }) =>
    $revealed ? theme.whiteArmor : theme.metalGray};

  border: 2px solid ${({ theme }) => theme.panelLine};
  border-radius: 4px;

  &:hover {
    box-shadow: 0 0 8px ${({ theme }) => theme.warningOrange};
  }

  &:active {
    box-shadow: ${({ theme }) => theme.beamGlow};
  }

  color: ${({ theme, $adjacent }) => {
    switch ($adjacent) {
      case 1: return theme.primaryBlue;
      case 2: return theme.psychGreen;
      case 3: return theme.primaryRed;
      case 4: return "#001F7A"; // Titans navy
      case 5: return "#556B2F"; // Zaku olive
      case 6: return theme.psychGreen;
      case 7: return theme.darkFrame;
      case 8: return theme.metalGray;
      default: return theme.darkFrame;
    }
  }};
`;

const StyledImg = styled.img`
    width: 20px;
    height 20px;
    pointer-events: none;
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
