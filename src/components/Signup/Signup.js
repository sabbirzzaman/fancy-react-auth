import React from 'react';
import './Signup.css';

const Signup = () => {
    return (
        <>
            <div className="form">
                <div className="heading">
                    <h2>Register to your account!</h2>
                </div>
                <form>
                    <div className="form-group">
                        <label>
                            <p>Your Name</p>
                            <input type="text" placeholder='Enter your name' />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            <p>Your Email</p>
                            <input type="email" placeholder='Enter your email' />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            <p>Password</p>
                            <input type="password" placeholder='Choose your password' />
                        </label>
                    </div>
                    <div className="form-group">
                        <input type="button" value="Register" />
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

export default Signup;
