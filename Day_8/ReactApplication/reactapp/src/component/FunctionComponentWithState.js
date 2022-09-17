import React, { useState } from 'react'

function FunctionComponentWithState() {
    let [count, setCount] = useState(0);
    return (
        <center>
            <div>
                <b>{count}</b>
                <button onClick={() => setCount(count + 1)}>Click</button>
            </div>
        </center>
    )
}

export default FunctionComponentWithState