"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  increment,
  decrement,
  changeByAmount,
} from "./slices/changeCounterSlice";
import { changeToBlue, changeToBlueAsync, changeToYellow } from "./slices/changeColorSlice";

const AppWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
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
  width: auto;
  min-width: 40px;
`;

export default function Home() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.changeCount.value);
  const colors = useSelector((state) => state.changeColor.color);
  const [newIncrement, setNewIncrement] = useState(0);

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", width: "100vw", color: colors }}
      >
        {count}
      </div>
      <AppWrapper>
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
          <StyledButton onClick={() => dispatch(changeToBlueAsync())}>blue</StyledButton>
          <StyledButton onClick={() => dispatch(changeToYellow())}>yellow</StyledButton>
        </div>
      </AppWrapper>
    </>
  );
}
