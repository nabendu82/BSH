import React from 'react'
import { useState } from 'react'

const AddContact = (props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const add = e => {
        e.preventDefault();
        if(name === '' || email === ''){
            alert('All fields are mandatory');
            return
        }
        props.addContactHandler({name, email})
        setName('')
        setEmail('')
        props.history.push('/')
    }

    return (
        <div className='ui main'>
            <h2>Add Contact</h2>
            <form className="ui form" onSubmit={add}>
                <div className="field">
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder='Name' id="name" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input type="text" placeholder='Email' id="email" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <button className="ui button blue">Add</button>
            </form>
        </div>
    )
}

export default AddContact