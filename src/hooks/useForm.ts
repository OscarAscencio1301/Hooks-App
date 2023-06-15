import { ChangeEvent, useState } from "react"


const useForm = <T>(valoresIniciales: T) => {

  const [form, setform] = useState(valoresIniciales)

  const changeEvent = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => {
    setform({
      ...form,
      [name]: value
    })
  }

  const reset = (valoresReinicidos = valoresIniciales) => {
    setform(valoresReinicidos)
  }


  return {
    form,
    ...form,
    setform,
    changeEvent,
    reset
  }
}

export default useForm
