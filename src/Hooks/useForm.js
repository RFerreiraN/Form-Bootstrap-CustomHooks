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

  const resetForm = () => {
    setFormState({
      email : '',
      username : '',
      password : ''
    })
  }

  return {
    formState, 
    resetForm,
    handleForm
  }
}
