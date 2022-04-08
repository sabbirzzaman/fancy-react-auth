import React, { useState } from 'react';
import { getAuth } from 'firebase/auth';
import './Form.css';

const Form = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const getEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const getPassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    console.log(email, password)

    const handleSignUp = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <div className="form">
                <div className="heading">
                    <h2>Register to your account!</h2>
                </div>

                <form onSubmit={handleSignUp}>
                    <div className="form-group">
                        <label>
                            <p>Your Name</p>
                            <input type="text" placeholder="Enter your name" />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            <p>Your Email</p>
                            <input
                                onBlur={getEmail}
                                type="email"
                                placeholder="Enter your email"
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            <p>Password</p>
                            <input
                                onBlur={getPassword}
                                type="password"
                                placeholder="Choose your password"
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register" />
                    </div>
                </form>
            </div>

            <div className="toggle">
                <h2>Already have an account?</h2>
                <button>Log In</button>
            </div>
        </>
    );
};

export default Form;
