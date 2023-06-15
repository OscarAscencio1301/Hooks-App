import { useRef } from "react"


const FocusScreen = () => {

    const valorInput = useRef<HTMLInputElement>(null)


    const onclick = () => {
        console.log(valorInput.current?.value)
    }

    return (
        <>
            <h1>Focus Screen</h1>
            <hr />

            <input
                type="text"
                placeholder="Ingrese su nombre"
                className="form-control"
                ref={valorInput}
            />

            <button onClick={ onclick}>Focus</button>
        </>
    )
}

export default FocusScreen
