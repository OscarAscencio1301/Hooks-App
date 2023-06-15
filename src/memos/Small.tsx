import { memo } from "react"


const Small = memo(({ counter }: { counter: number }) => {

    console.log('Me muestro')

    return (
        <small>
            {counter}
        </small>
    )
})

export default Small
