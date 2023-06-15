
import { useMemo, useState } from "react"
import useCounter from "../hooks/useCounter"
import Small from "./Small"


const procesoPesado = (n = 100) => {
    for (let i = 0; i < n; i++) {
        console.log('Venga')
    }

    return `${n} iteraciones`
}

const MemoHook = () => {

    const { counter, changeCounter } = useCounter(0)
    const [show, setshow] = useState(true)

    const pesado = useMemo(() => procesoPesado(counter), [counter])

    return (
        <>
            <h1>Counter: <Small counter={counter} /></h1>
            <hr />
            <h4>{pesado}</h4>
            <button className="btn btn-primary" onClick={() => changeCounter(+1)}>+1</button>
            <button className="btn btn-primary" onClick={() => setshow(!show)}>Show</button>

        </>
    )
}

export default MemoHook
