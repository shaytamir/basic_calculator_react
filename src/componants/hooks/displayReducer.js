// import React from "react";
import onEqaual from "./onEqual.js";
import { checkForDecimal, deleteLast } from "../hooks/useCalculits.js";

const initialState = 0;
export let history = [];
const reducer = (state, action) => {
  const [value, act, minus] = action,
    num = state;
  let lastNum = num[num.length - 1];

  switch (act) {
    case "addition":
      return state === 0
        ? (state = "+")
        : lastNum === " "
        ? state
        : (state += value);
    case "subtract":
      return state === 0
        ? (state = minus)
        : lastNum === " "
        ? (state += minus)
        : (state += value);
    // case "minus":
    // return state === 0 ? (state = value) : (state += value);
    case "multiply":
      return state === 0 || lastNum === " " || lastNum === "-"
        ? state
        : (state += value);
    case "divide":
      return state === 0 || lastNum === " " || lastNum === "-"
        ? state
        : (state += value);
    case "num":
      return state === 0 ? (state = value) : (state += value);
    case "numO":
      return state == 0 ? state : (state += value);
    case "decimal":
      return checkForDecimal(state) ? state : (state += value);
    case "equal":
      return state === 0 ? state : (state = onEqaual(state));
    case "del":
      return state === 0 ? state : deleteLast(state);
    case "clear":
      return initialState;
    case "history":
      return history.push(value);
    case "clearHhistory":
      return (history = []);
    default:
      return state;
  }
};

const reducerValue = [reducer, initialState];
export default reducerValue;
