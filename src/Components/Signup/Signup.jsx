import React from 'react'
import './Signup.css'

const Signup = () => {
    return (
        <div className='signup'>
            <h3>SignUp</h3>
            <form action="" className='form'>
                <div className='form_content'>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" placeholder='Username' required />
                </div>
                <div className='form_content'>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="enter your email" placeholder='Email' required />
                </div>
                <div className='form_content'>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="create password" placeholder='Password' required />
                </div>
                <button>Create account</button>
                <p>Already have an account, Click here</p>

            </form>
        </div>
    )
}

export default Signup
