import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import app from '../../firebase.init';
import './Surprise.css'

const auth = getAuth(app);

const Surprise = () => {
    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
            navigate('/')
        })
        .catch(error => {
            console.error(error)
        })
    }

    const navigate = useNavigate();

    return (
        <div className='surprise'>
            <h1>Welcome!</h1>
            <button onClick={handleSignOut}>Sign Out</button>
        </div>
    );
};

export default Surprise;