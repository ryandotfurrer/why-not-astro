import { createSignal } from "solid-js";
import MinusIconSolid from "./MinusIconSolid.jsx";
import PlusIconSolid from "./PlusIconSolid.jsx";

const CounterSolid = () => {
  const [count, setCount] = createSignal(0);

  const increment = () => {
    setCount(count() + 1);
  };

  const decrement = () => {
    setCount(count() - 1);
  };

  return (
    <div>
      <p className="text-lg text-blue-50">Counter: {count()}</p>
      <div className="flex gap-2">
        <button
          onClick={increment}
          className="bg-success text-success-foreground px-4 py-2 rounded-sm">
          <PlusIconSolid>
            <span className="sr-only">Increase count</span>
          </PlusIconSolid>
        </button>
        <button
          onClick={decrement}
          className="bg-destructive text-destructive-foreground px-4 py-2 rounded-sm">
          <MinusIconSolid>
            <span className="sr-only">Decrease count</span>
          </MinusIconSolid>
        </button>
      </div>
    </div>
  );
};

export default CounterSolid;
