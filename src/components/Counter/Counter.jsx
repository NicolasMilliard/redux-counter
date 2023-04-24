import React from "react";
import { useSelector, useDispatch } from "react-redux"; // import the necessary hooks from react-redux
import { increment, decrement } from "../../redux/counterSlice"; // import the action creators from the counterSlice
import "./Counter.css";

const Counter = () => {
  const count = useSelector((state) => state.counter.value); // access the counter value from the Redux store using the useSelector hook
  const dispatch = useDispatch(); // create a reference to the dispatch function using the useDispatch hook

  return (
    <div className="counter-container">
      <button className="counter-button" onClick={() => dispatch(decrement())}>
        -
      </button>
      <h2 className="counter-value">{count}</h2>
      <button className="counter-button" onClick={() => dispatch(increment())}>
        +
      </button>
    </div>
  );
};

export default Counter;
