import { useState } from 'react';
import MinusIconReact from './MinusIconReact.jsx';
import PlusIconReact from './PlusIconReact.jsx';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <p className='text-lg text-cyan-50'>Counter: {count}</p>
            <div className='flex gap-2'>
                <button onClick={increment} className='bg-success text-success-foreground px-4 py-2 rounded-sm'>
                    <PlusIconReact>
                        <span className="sr-only">Increase count</span>
                    </PlusIconReact>
                </button>
                <button onClick={decrement} className='bg-destructive text-destructive-foreground px-4 py-2 rounded-sm'>
                    <MinusIconReact>
                        <span className="sr-only">Decrease count</span>
                    </MinusIconReact>
                </button>
            </div>
        </div>
    );
};

export default Counter;
