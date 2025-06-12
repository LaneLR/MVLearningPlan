"use client";

import { useReducer } from "react";

const directions = ["↑", "→", "↓", "←"];

const initialState = { direction: "↑" };

function reducer(state, action) {
  const currentIndex = directions.indexOf(state.direction);

  switch (action.type) {
    case "left": {
      const newIndex =
        (currentIndex - 1 + directions.length) % directions.length;
      return { direction: directions[newIndex] };
    }
    case "right": {
      const newIndex = (currentIndex + 1) % directions.length;
      return { direction: directions[newIndex] };
    }
    default:
      return state;
  }
}

export default function ChangeArrowDirection() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "30px 0 0 0",
          width: "100vw",
          flexFlow: 'column nowrap',
          alignItems: 'center'
        }}
      >
        <div style={{fontSize: "2rem"}}>
             {state.direction}
        </div>
       
        <div
          style={{
            display: "flex",
            width: "200px",
            justifyContent: "space-between",
          }}
        >
          <button onClick={() => dispatch({ type: "left" })}>Left</button>
          <button onClick={() => dispatch({ type: "right" })}>Right</button>
        </div>{" "}
      </div>
    </>
  );
}
