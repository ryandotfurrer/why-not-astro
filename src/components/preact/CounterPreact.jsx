import { useState } from "preact/hooks";
import MinusIconPreact from "./MinusIconPreact.jsx";
import PlusIconPreact from "./PlusIconPreact.jsx";

export default function CounterPreact() {
  const [count, setCount] = useState(0);

  const incrementPreact = () => {
    setCount(count + 1);
  };

  const decrementPreact = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p className="text-lg text-violet-50">Counter: {count}</p>
      <div className="flex gap-2">
        <button
          onClick={incrementPreact}
          className="bg-success text-success-foreground px-4 py-2 rounded-sm">
          <PlusIconPreact>
            <span className="sr-only">Increase count</span>
          </PlusIconPreact>
        </button>
        <button
          onClick={decrementPreact}
          className="bg-destructive text-destructive-foreground px-4 py-2 rounded-sm">
          <MinusIconPreact>
            <span className="sr-only">Decrease count</span>
          </MinusIconPreact>
        </button>
      </div>
    </div>
  );
}
