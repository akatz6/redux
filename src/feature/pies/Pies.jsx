import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount,
} from "./piesSlice";

export function Pie() {
  const count = useSelector((state) => state.pie.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState("2");

  return (
    <div>
      <div>
        <button
          onClick={() => dispatch(increment())}
          className="btn btn-primary"
        >
          + Pie
        </button>
        <span>{count}</span>
        <button
          onClick={() => dispatch(decrement())}
          className="btn btn-primary"
        >
          - Pie
        </button>
      </div>
      <div>
        <button
          className="btn btn-primary"
          onClick={() => dispatch(incrementByAmount(Number(amount) || 0))}
        >
          Add Amount Pie
        </button>
        <input value={amount} onChange={(e) => setAmount(e.target.value)} />
        <button
          className="btn btn-primary"
          onClick={() => dispatch(decrementByAmount(Number(amount) || 0))}
        >
          Decrease Amount Pie
        </button>
      </div>
    </div>
  );
}
