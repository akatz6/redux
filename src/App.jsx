import { Pie } from "./feature/pies/Pies";
import { IceCream } from "./feature/iceCream/IceCream";
import { useDispatch } from "react-redux";
import "./App.css";
import { resetPie } from "./feature/pies/piesSlice";
import { resetIceCream } from "./feature/iceCream/iceCreamSlice";
import { useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const flavor = useSelector((state) => state.iceCream.flavor);
  return (
    <div>
      <div className="App">
        <button
          type="button"
          className="btn btn-success"
          onClick={() => dispatch(resetPie())}
        >
          Reset
        </button>
        <Pie />
      </div>
      <div>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => dispatch(resetIceCream())}
        >
          Reset
        </button>
        <h3>{flavor}</h3>
        <IceCream />
      </div>
    </div>
  );
}

export default App;
