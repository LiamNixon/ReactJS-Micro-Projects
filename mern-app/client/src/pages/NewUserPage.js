// Import dependencies
import React, { useState } from 'react';
import Axios from 'axios';

const NewUserPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const usernameInput = e => {
        setUsername(e.target.value);
    };

    const passwordInput = e => {
        setPassword(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (username !== '' && password !== '') {
            addNewUser();
        } else {
            console.log('Please ensure both fields have values');
        };
    };

    const addNewUser = () => {
        Axios.post('http://localhost:5000/add-user',{username, password})
        .then(function(){
            setUsername('');
            setPassword('');
            console.log('User created successfullly!');
        })
        .catch(function(err) {
            console.error(err);
        });
    };

    return (
        <div>
            <form className="flex flex-col justify-center items-center">
                <div>
                    <p>Choose Username:</p>
                    <input onChange={usernameInput} type="text" className="border-neutral-300 border bg-slate-100 rounded-sm" placeholder="Username:" value={username}/>
                </div>
                <div>
                    <p>Set Password:</p>
                    <input onChange={passwordInput} type="password" className="border-neutral-300 border bg-slate-100 rounded-sm" placeholder="Password:" value={password}/>
                </div>
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
};

export default NewUserPage;