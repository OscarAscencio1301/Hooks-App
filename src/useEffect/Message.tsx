import { useEffect } from "react"


const Message = () => {

    useEffect(() => {
    
      window.addEventListener('mousemove', (e) => {
        console.log(e.x)
        console.log(e.y)
      })
    
      return () => {
        window.removeEventListener('mousemove', () => {
            console.clear()
        })
      }
    }, [])
    

  return (
    <div>
      <h1>Usuario ya existe</h1>
    </div>
  )
}

export default Message
