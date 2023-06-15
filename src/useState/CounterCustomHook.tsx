import useCounter from "../hooks/useCounter"



const CounterCustomHook = () => {

  const { counter, changeCounter, reset } = useCounter(100)

  return (
    <>
      <h1>Counter: {counter}</h1>
      <hr />
      <button className="my-3 btn btn-primary" onClick={reset}>Reset</button>
      <div className="d-flex gap-2">
        <button className="btn btn-primary" onClick={() => changeCounter(+1)}>+1</button>
        <button className="btn btn-primary" onClick={() => changeCounter(+2)}>+2</button>
        <button className="btn btn-primary" onClick={() => changeCounter(+5)}>+5</button>
        <button className="btn btn-primary" onClick={() => changeCounter(-1)}>-1</button>
        <button className="btn btn-primary" onClick={() => changeCounter(-2)}>-2</button>
        <button className="btn btn-primary" onClick={() => changeCounter(-5)}>-5</button>

      </div>
    </>
  )
}

export default CounterCustomHook



