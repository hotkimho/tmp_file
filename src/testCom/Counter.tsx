import React, { useReducer, } from "react";

type Action = { type: 'INCREASE' } | { type: 'DECREASE' };

function reducer(state: number, action: Action): number {
    switch (action.type) {
        case 'INCREASE':
            return state + 1;
        case 'DECREASE':
            return state - 1;
        default:
            throw new Error("unhandled action");
    }
}

function Counter() {
    const [count, setCount] = useReducer(reducer, 0);
    const onIncrease = () => { }
    const onDecrease = () => { }
    return (
        <div>
            <h1>{count} </h1>
            <div>
                <button onClick={onIncrease} > +1 </button>
                <button onClick={onDecrease} > -1 </button>
            </div>
        </div>
    )
}

export default Counter;
