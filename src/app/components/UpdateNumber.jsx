"use client";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  changeByAmount,
} from "../slices/changeCounterSlice";
import { changeToBlue, changeToBlueAsync, changeToYellow } from "../slices/changeColorSlice";
import { fetchMemeImage } from "../slices/changeImageSlice"; 
import styled from "styled-components";
import { useState } from "react";

const AppWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 30vh;
  flex-flow: column nowrap;
`;

const StyledInput = styled.input`
  background-color: white;
  font-size: 1.3rem;
  color: black;
`;

const StyledButton = styled.button`
  background-color: gray;
  font-size: 1.3rem;
  color: black;
  border: 2px solid gray;
  margin: 0 10px;
  width: 70px;
  height: auto;

  &:active {
    background-color: darkgray;
    margin: 0 10px;
    border: none;
  }
`;

export default function UpdateNumber() {
  const count = useSelector((state) => state.changeCount.value);
  const colors = useSelector((state) => state.changeColor.color);
  const memeImgUrl = useSelector((state) => state.changeImage.url);
  const dispatch = useDispatch();
  const [newIncrement, setNewIncrement] = useState(0);

  return (
    <>
      <AppWrapper>
              <div
        style={{ display: "flex", justifyContent: "center", width: "100vw", color: colors }}
      >
        {count}
      </div>
        <div>
          <StyledButton onClick={() => dispatch(increment())}>+1</StyledButton>
          <StyledButton onClick={() => dispatch(decrement())}>-1</StyledButton>
          <StyledInput
            onChange={(e) => setNewIncrement(e.target.value)}
            type="number"
            placeholder="add amount"
          />
          <StyledButton
            onClick={() => dispatch(changeByAmount(Number(newIncrement)))}
          >
            Submit
          </StyledButton>
        </div>
        <div>
          <StyledButton onClick={() => dispatch(changeToBlueAsync())}>
            blue
          </StyledButton>
          <StyledButton onClick={() => dispatch(changeToYellow())}>
            yellow
          </StyledButton>
        </div>
      </AppWrapper>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          style={{ maxWidth: "400px", maxHeight: "400px" }}
          src={memeImgUrl}
        />
        <StyledButton onClick={() => dispatch(fetchMemeImage())}>
          Get Meme
        </StyledButton>
      </div>
    </>
  );
}
