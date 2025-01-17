import { useState } from "preact/hooks";
import MinusIconPreact from "./MinusIconPreact.jsx";
import PlusIconPreact from "./PlusIconPreact.jsx";

const CounterPreact = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p className="text-lg text-violet-50">Counter: {count}</p>
      <div className="flex gap-2">
        <button
          onClick={increment}
          className="bg-success text-success-foreground px-4 py-2 rounded-sm">
          <PlusIconPreact>
            <span className="sr-only">Increase count</span>
          </PlusIconPreact>
        </button>
        <button
          onClick={decrement}
          className="bg-destructive text-destructive-foreground px-4 py-2 rounded-sm">
          <MinusIconPreact>
            <span className="sr-only">Decrease count</span>
          </MinusIconPreact>
        </button>
      </div>
    </div>
  );
};

export default CounterPreact;
