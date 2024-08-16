import React from 'react'
import './Signup.css'

const Signup = () => {
    return (
        <div className='signup'>
            <h3>SignUp</h3>
            <form action="" className='form'>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required />
                <label htmlFor="email">Email:</label>
                <input type="email" name="enter your email" required/>
                <label htmlFor="password">Password:</label>
                <input type="password" name="create password" required />
            </form>
        </div>
    )
}

export default Signup
