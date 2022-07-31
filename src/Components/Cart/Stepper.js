import React, { useState } from 'react'

function Stepper({ quantity }) {

    const [count, setcount] = useState(1)


    const inc = () => {
        setcount(count + 1)
    }

    const dec = () => {
        if (count > 1) {
            setcount(count - 1)
        }
    }

    return (
        <div>
            <button style={{ width: '2em' }} onClick={dec}>-</button>
            <span style={{ padding: '1em' }}>{count}</span>
            {quantity(count)}
            <button style={{ width: '2em' }} onClick={inc}>+</button>
        </div>
    )
}

export default Stepper