import React from "react";
import Board from "./Board";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { generateBoard } from "../utils/generateBoard";

function GameOver() {
    const navigate = useNavigate();
    return (
        <div className="game-over">
            <h1>GAME OVER</h1>
            <button onClick={() => navigate("./Board"}>
            TRY AGAIN
            </button>

        </div>
    )
}

export default GameOver;
