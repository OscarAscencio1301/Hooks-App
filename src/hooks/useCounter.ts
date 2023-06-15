import { useState } from "react"


const useCounter = (initialValue: number) => {

    const [counter, setCounter] = useState(initialValue)

    const changeCounter = (value: number) => {
        setCounter(counter => Math.max(0, counter + value))
    }

    const reset = () => {
        setCounter(initialValue)
    }

    return {
        counter,
        changeCounter,
        reset
    }
}

export default useCounter
