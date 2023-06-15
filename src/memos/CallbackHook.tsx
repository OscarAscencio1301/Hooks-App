import { useCallback, useState } from "react"
import ShowIncrement from "./ShowIncrement"


const CallbackHook = () => {

    const [counter, setcounter] = useState(10)

    const incrementarValor = useCallback((params: number) => { setcounter(counter => counter + params) }, [])

    return (
        <>
            <h1>useCallback: {counter}</h1>
            <hr />
            <ShowIncrement increment={incrementarValor} />
        </>
    )
}

export default CallbackHook
