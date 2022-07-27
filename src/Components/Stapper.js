import { useState } from "react"
import React from 'react'

const [counter, setcounter] = useState(0)

const inc = () => {
    setcounter(counter + 1)
}
const dec = () => {
    if (counter > 0) {
        setcounter(counter - 1)
    }
}

function Stapper() {
    return (
        <div>
            <button onClick={inc}></button>
            {counter}
            <button onClick={dec}></button>
        </div>
    )
}

export default Stapper


