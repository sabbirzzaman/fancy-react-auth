import React, { useState } from 'react';
import {
    createUserWithEmailAndPassword,
    getAuth,
    sendEmailVerification,
    signInWithEmailAndPassword,
    updateProfile,
} from 'firebase/auth';
import './Form.css';
import app from '../../firebase.init';

const auth = getAuth(app);

const Form = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userDetails, setUserDetails] = useState('');

    const getName = (e) => {
        setName(e.target.value);
    };

    const getEmail = (e) => {
        setEmail(e.target.value);
    };

    const getPassword = (e) => {
        setPassword(e.target.value);
    };

    const handleSignUp = (e) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
                setProfileName();
                verifyEmail();
            })
            .then((error) => {
                console.error(error);
            });
        e.preventDefault();
    };

    const handleLogIn = (e) => {
        signInWithEmailAndPassword(auth, email, password).then((result) => {
            setUserDetails(result.user);
        });

        e.preventDefault();
    };

    const setProfileName = () => {
        updateProfile(auth.currentUser, {
            displayName: name,
        });
    };

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser).then(() => {
            console.log('email send');
        });
    };

    console.log(userDetails)

    const formSlideRight = {
        transition: '.3s ease-in-out',
        transform: 'translateX(100%)',
    };

    const formSlideLeft = {
        transition: '.3s ease-in-out',
        transform: 'translateX(0%)',
    };

    const toggleSlideRight = {
        transition: '.3s ease-in-out',
        transform: 'translateX(-100%)',
    };

    const toggleSlideLeft = {
        transition: '.3s ease-in-out',
        transform: 'translateX(0%)',
    };

    return (
        <>
            <div
                className="form"
                style={isLogin ? formSlideRight : formSlideLeft}
            >
                <div className="heading">
                    <h2>
                        {isLogin
                            ? 'Login to your account!'
                            : 'Register to your account!'}
                    </h2>
                </div>

                <form onSubmit={isLogin ? handleLogIn : handleSignUp}>
                    {isLogin || (
                        <div className="form-group">
                            <label>
                                <p>Your Name</p>
                                <input
                                    onBlur={getName}
                                    type="text"
                                    placeholder="Enter your name"
                                />
                            </label>
                        </div>
                    )}
                    <div className="form-group">
                        <label>
                            <p>Your Email</p>
                            <input
                                onBlur={getEmail}
                                type="email"
                                placeholder="Enter your email"
                                required
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            <p>Password</p>
                            <input
                                onBlur={getPassword}
                                type="password"
                                placeholder={
                                    isLogin
                                        ? 'Enter your password'
                                        : 'Choose your password'
                                }
                                required
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <input
                            type="submit"
                            value={isLogin ? 'Log in' : 'Register'}
                        />
                    </div>
                </form>
            </div>

            <div
                className="toggle"
                style={isLogin ? toggleSlideRight : toggleSlideLeft}
            >
                <h2>
                    {isLogin
                        ? 'Not registered yet?'
                        : 'Already have an account?'}
                </h2>
                <button onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? 'Register' : 'Log In'}
                </button>
            </div>
        </>
    );
};

export default Form;
