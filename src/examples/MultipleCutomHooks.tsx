import useCounter from "../hooks/useCounter"
import useFetch from "../hooks/useFetch"
import Alert from "./Alert"
import Blockquote from "./Blockquote"


const MultipleCutomHooks = () => {


    const { counter, changeCounter } = useCounter(1)
    const { data, loading } = useFetch(`https://rickandmortyapi.com/api/episode/${counter}`)



    return (
        <>
            <h1>Rick and Morty</h1>
            <hr />
            {
                loading ? <Alert /> : <Blockquote name={data?.name} episode={data?.episode} />
            }

            <button className="btn btn-primary" onClick={() => changeCounter(+1)}>Siguiente</button>
        </>
    )
}

export default MultipleCutomHooks
