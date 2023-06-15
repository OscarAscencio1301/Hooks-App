import { useState } from "react"


const Counter = () => {
    const [values, setvalues] = useState({
        counter: 0,
        clicks: 0
    })

    const changeCounter = (value:number) => {
        setvalues({
            ...values,
            counter: values.counter + value,
            clicks: values.clicks + 1
        })
    }
  return (
    <>
      <h1>Counter: {values.counter}</h1>
      <h3>Clicks: {values.clicks}</h3>
      <hr />
      <button onClick={() => changeCounter(+1)}>+1</button>
      <button onClick={() => changeCounter(+2)}>+2</button>
      <button onClick={() => changeCounter(+5)}>+5</button>
      <button onClick={() => changeCounter(-1)}>-1</button>
      <button onClick={() => changeCounter(-2)}>-2</button>
      <button onClick={() => changeCounter(-5)}>-5</button>
    </>
  )
}

export default Counter
