import React from 'react'

const Login = () => {
  return (
    <>
    <center>
        <h2>Login Page</h2>
        <br></br>
        <label>Username </label>
        <input type='text' name="uname" />
        <br/><br/>
        <label>Password </label>
        <input type='text' name="pwd" />
        <br/><br/>
        <input type='submit' name="btn"/>
        <br/><br/>
        <a href='/'>Back to Home</a>
    </center>
    </>
  )
}

export default Login
