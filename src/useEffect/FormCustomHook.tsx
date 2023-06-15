import { FormEvent } from "react"
import useForm from "../hooks/useForm"


const FormCustomHook = () => {

    const { email, password, username, form, changeEvent, reset } = useForm({
        username: '',
        email: '',
        password: ''
    })

    const sendForm = (e: FormEvent) => {
        e.preventDefault()
        console.log(form)

        reset()
    }


    return (
        <form onSubmit={sendForm}>
            <h1>Formulario Custom Hook</h1>
            <hr />
            <input type="text" onChange={changeEvent} value={username} name="username" className="form-control" placeholder="Username" />
            <input type="email" onChange={changeEvent} value={email} name="email" className="form-control mt-4" placeholder="Email" />
            <input type="password" onChange={changeEvent} value={password} name="password" className="form-control mt-4" placeholder="Password" />
            <button className="btn btn-primary mt-2">Enviar</button>
        </form>
    )
}

export default FormCustomHook
