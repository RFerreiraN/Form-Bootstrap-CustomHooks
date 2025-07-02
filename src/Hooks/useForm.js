import { useState } from "react";

export const useForm = (valueForm = {}) => {

  const [formState, setFormState] = useState(valueForm)

  const handleForm = ({ target }) => {
    const { name, value } = target
    setFormState({
      ...formState,
      [name]: value
    })

  }

  return {
    formState, 
    handleForm
  }
}
