import { createSignal } from "solid-js";
import MinusIconSolid from "./MinusIconSolid.jsx";
import PlusIconSolid from "./PlusIconSolid.jsx";

const CounterSolid = () => {
  const [count, setCount] = createSignal(0);

  const increment = () => setCount(count() + 1);
  const decrement = () => setCount(count() - 1);

  return (
    <div>
      <p class="text-lg text-blue-50">Counter: {count()}</p>
      <div class="flex gap-2">
        <button
          onclick={increment}
          class="bg-success text-success-foreground px-4 py-2 rounded-sm">
          <PlusIconSolid />
          <span class="sr-only">Increase count</span>
        </button>
        <button
          onclick={decrement}
          class="bg-destructive text-destructive-foreground px-4 py-2 rounded-sm">
          <MinusIconSolid />
          <span class="sr-only">Decrease count</span>
        </button>
      </div>
    </div>
  );
};

export default CounterSolid;
