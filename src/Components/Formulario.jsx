import { useState } from 'react';

export const Formulario = () => {

  const [formState, setFormState] = useState({
    email: '',
    password: '',
    username: ''
  })

  const { email, password, username } = formState

  const handleForm = ({ target }) => {
    const { name, value } = target
    setFormState({
      ...formState,
      [name]: value
    })

  }

  const onsubmitForm = (event) => {
    event.preventDefault()
    console.log(formState)
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
