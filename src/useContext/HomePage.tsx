import { useContext } from "react"
import { UserContext } from "./context/UseContext"


const HomePage = () => {
  const {user} = useContext(UserContext)
  return (
    <div>
      <h1>Home Page <small>{user.usename}</small></h1>
      <code>{JSON.stringify(user, null, 3)}</code>
    </div>
  )
}

export default HomePage
