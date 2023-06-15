
import { useState } from "react"
import useCounter from "../hooks/useCounter"
import Small from "./Small"



const Memorize = () => {

    const { counter, changeCounter } = useCounter(0)
    const [show, setshow] = useState(true)

    return (
        <>
            <h1>Counter: <Small counter={counter} /></h1>
            <hr />
         
            <button className="btn btn-primary" onClick={() => changeCounter(+1)}>+1</button>
            <button className="btn btn-primary" onClick={() => setshow(!show)}>Show</button>

        </>
    )
}

export default Memorize
