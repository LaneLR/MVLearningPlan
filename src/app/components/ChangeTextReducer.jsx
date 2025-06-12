'use client'
import { useReducer, useRef, useState } from "react";

const initialState = {
  text: "color",
};

function reducer(state, action) {
  switch (action.type) {
    case "yellow":
      return {text: "yellow"};
    case "red":
      return {text: "red"};
    case "blue":
      return {text: "blue"};
    case "green":
      return {text: "green"};
    case "pink":
      return {text: "pink"};
    default:
      return initialState; //returns the object of initial state, so 'color' is displayed
  }
}

export default function ChangeTextWords() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [dummy, setUpdate] = useState(false)
  const trackingState = useRef(state)

  return (
    <>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <p>This is the reference state: {trackingState.current.text}</p>
        <br />
        {state.text}
        <div>
          <button onClick={() => dispatch({ type: "yellow" })}>yellow</button>
          <button onClick={() => dispatch({ type: "red" })}>red</button>
          <button onClick={() => dispatch({ type: "blue" })}>blue</button>
          <button onClick={() => dispatch({ type: "green" })}>green</button>
          <button onClick={() => dispatch({ type: "pink" })}>pink</button>
          <button onClick={() => dispatch({ type: "default" })}>default</button>
          <button onClick={() => {trackingState.current = state; setUpdate(r => !r)}}>update State</button>
        </div>
      </div>
    </>
  );
}
