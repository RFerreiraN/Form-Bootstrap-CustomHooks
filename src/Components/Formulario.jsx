import { useState } from 'react';
import { useForm } from '../Hooks/useForm';

export const Formulario = () => {

  const initialForm = {
    email: '',
    password: '',
    username: ''
  }

  const { formState, handleForm, resetForm } = useForm(initialForm)

  const { email, password, username } = formState

  const onsubmitForm = (event) => {

    if ( 
      email.trim() === '' ||
      password.trim() === '' ||
      username.trim() === ''
    ) return
    
    event.preventDefault()
    console.log(formState)
    resetForm()
  }

  return (
    <form onSubmit={onsubmitForm}>

      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={handleForm}
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleForm}
        />
      </div>

      <div className="form-group">
        <label htmlFor="username">User Name</label>
        <input
          type="text"
          className="form-control"
          name="username"
          placeholder="Enter username"
          value={username}
          onChange={handleForm}
        />
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}
