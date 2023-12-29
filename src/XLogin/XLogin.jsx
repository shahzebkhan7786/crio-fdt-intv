import React, { useState } from 'react';

const XLogin = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const [successMsg, setSuccessMsg] = useState(null);
    const [failMsg, setFailMsg] = useState(null);

    const handleSubmit = evt=>{
        evt.preventDefault();

        if(formData?.username === "user" && formData?.password === "password"){
            setSuccessMsg("Welcome, user!");
        }else{
            setFailMsg("Invalid username or password");
        }
    }

    const handleChange = evt=>{
        const { name, value } = evt.target;

        setFormData({...formData, [name]: value});
    } 
    return (
        <div>
            <h1>Login Page</h1>
            {successMsg
            ?
                <p>{successMsg}</p>
            :
            <>
                <p>{failMsg}</p>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input onChange={handleChange} value={formData?.username} required type='text' name='username' id='username'/>
                    <br/>
                    <label htmlFor="password">Password</label>
                    <input onChange={handleChange} value={formData?.password} required type='password' name='password' id='password'/>
                    <br/>
                    <button type='submit'>Submit</button>
                </form>
            </>
            }
        </div>
    );
};

export default XLogin;