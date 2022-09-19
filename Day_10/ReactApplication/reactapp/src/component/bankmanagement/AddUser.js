import React, { useState } from 'react'
import JsonService from './JsonService'

function AddUser() {
    const initialValue = {
        username: '',
        age: '',
        email: ''
    }
    const [user, setUser] = useState(initialValue);
    const { username, age, email } = user;

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(user);
        JsonService.saveUser(user);
    }
    const handleChange = (event) => {
        setUser({...user,[event.target.name]:event.target.value})
    }
    return (
        <form onSubmit={handleSubmit}>
            Name:<input type='text' name='username' value={username} onChange={(event)=>handleChange(event)} />< br />
            Age:<input type='text' name='age' value={age} onChange={handleChange} />< br />
            Email:<input type='text' name='email' value={email} onChange={handleChange} />< br />
            <input type='submit' className='btn btn-success' value="SUBMIT" />
        </form>
    )
}

export default AddUser