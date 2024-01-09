import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount,
  changeFlavor,
} from "./iceCreamSlice";

export function IceCream() {
  const count = useSelector((state) => state.iceCream.value);

  const dispatch = useDispatch();
  const [amount, setAmount] = useState("2");
  const [flavorish, setFlavor] = useState("");

  return (
    <div>
      <div>
        <button
          onClick={() => dispatch(increment())}
          className="btn btn-primary"
        >
          + IceCream
        </button>
        <span>{count}</span>
        <button
          onClick={() => dispatch(decrement())}
          className="btn btn-primary"
        >
          - IceCream
        </button>
      </div>
      <div>
        <button
          className="btn btn-primary"
          onClick={() => dispatch(incrementByAmount(Number(amount) || 0))}
        >
          Add Amount
        </button>
        <input value={amount} onChange={(e) => setAmount(e.target.value)} />
        <button
          className="btn btn-primary"
          onClick={() => dispatch(decrementByAmount(Number(amount) || 0))}
        >
          Decrease Amount
        </button>
      </div>
      <div>
      <input value={flavorish} onChange={(e) => setFlavor(e.target.value)} />
      <button
          className="btn btn-primary"
          onClick={() => dispatch(changeFlavor(flavorish))}
        >
          Update Flavor
        </button>
      </div>
    </div>
  );
}
