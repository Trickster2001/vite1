import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
  const [username, setUsername] = useState("")
  const [pass, setPass] = useState("")

  const {setUser} = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({username, pass})
  }
  return (
    <div>
      <h2>Login</h2>
      <input onChange={(e)=>{setUsername(e.target.value)}} value={username} type="text" placeholder='Username' />
      <input onChange={(e)=>{setPass(e.target.value)}} value={pass} type="text" placeholder='Password' />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login