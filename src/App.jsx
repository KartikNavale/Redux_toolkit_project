import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import "./index.css"
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "./assets/features/counter/counterSlice";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handelIncrementClick() {
    dispatch(increment());
  }

  function handelDecerementClick() {
    dispatch(decrement());
  }

  function handelResetClick() {
    dispatch(reset());
  }

  function handelIncAmountClick() {
    dispatch(incrementByAmount(amount));
  }

  return (
    <>
      <div className="container">
        <div className="flex justify-self-center">
          <button className="slice-btn" onClick={handelIncrementClick}>
            +
          </button>
          <p>Count: {count}</p>
          <button className="slice-btn" onClick={handelDecerementClick}>
            -
          </button>
        </div>

        <div className="flex justify-self-center">
          <button className="" onClick={handelResetClick}>
            Reset
          </button>
        </div>

        <div>
          <input
          className="w-64 h-12 px-4 py-2 border border-gray-300 rounded"
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button className="slice-btn2" onClick={handelIncAmountClick}>
            Inc by Amount
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
