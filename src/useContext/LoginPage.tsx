import { useContext } from "react"
import { UserContext } from "./context/UseContext"

const LoginPage = () => {

  const alo = useContext(UserContext)

  console.log(alo)

  return (
    <div>
      <h1>Login Page</h1>
    </div>
  )
}

export default LoginPage
