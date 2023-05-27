import React, { useState } from 'react'
import Header from '../components/view/Header'

const Signup = (props) => {
    const [inputValue, setInputvalue] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const onHandleChange = (e) => {
        const { name, value } = e.target;
        setInputvalue({ ...inputValue, [name]: value });

    }

    const onHandleSubmit = (e) => {
        e.preventDefault();

        props.onSignup(inputValue);
    }

    return (
        <div>
            {Header()}
            <h1 className='text-center'>Signup</h1>
            <form onSubmit={onHandleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input type="text" className="form-control" name="name" onChange={onHandleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="text" className="form-control" id="email" name="email" onChange={onHandleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" onChange={onHandleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">ConfirmPassword</label>
                    <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" onChange={onHandleChange} />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Signup