import { ChangeEvent, useEffect, useState } from "react"
import Message from "./Message"


const SimpleForm = () => {

    const [form, setform] = useState({
        username: 'oscar',
        email: ''
    })
    const { email, username } = form

    const handleChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => {
        setform({
            ...form,
            [name]: value
        })
    }

    useEffect(() => { 
        console.log('Useeffect')
    },[])

    useEffect(() => {
        console.log('Form')

    },[form])

    useEffect(() => {
        console.log('Email')
    },[email])

    

    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />

            <input type="text" onChange={handleChange} value={username} name="username" className="form-control" placeholder="Username" />
            <input type="email" onChange={handleChange} value={email} name="email" className="form-control mt-4" placeholder="Email" />
            {
                username === 'oscar' && <Message />
            }
        </>
    )
}

export default SimpleForm
