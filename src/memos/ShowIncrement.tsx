import { memo } from "react"


const ShowIncrement = memo(({ increment }: { increment: (n:number) => void }) => {
    console.log('Hola')
    
    return (
        <button onClick={() => increment(5)}>
            +1
        </button>
    )
})
export default ShowIncrement
