import React, { useState } from 'react'
import Header from '../components/view/Header'

const Signin = (props) => {
    const [inputValue, setInputValue] = useState({
        email: '',
        password: ''
    })
    const onHandleChange = (e) => {
        const { name, value } = e.target;
        setInputValue({ ...inputValue, [name]: value })
    }
    const onHandleSubmit = (e) => {
        e.preventDefault();
        const userData = JSON.parse(localStorage.getItem('user'));
        props.onSignin(inputValue)
    }
    return (
        <div>
            {Header()}
            <h1 className='text-center'>Signin</h1>
            <form onSubmit={onHandleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="text" className="form-control" id="email" name="email" onChange={onHandleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" onChange={onHandleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Signin