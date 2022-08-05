import React, { useState } from 'react'

interface IProps{
    people: {
        name: string;
        age: number;
        img: string;
        note: string;
    }[],
    setPeople: React.Dispatch<React.SetStateAction<{
        name: string;
        age: number;
        img: string;
        note: string;
    }[]>>
}

const AddToPeople: React.FC<IProps> = ({ setPeople, people }) => {
    const [input, setInput] = useState({ name: '', age: '', note: '', img: '' })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({
            ...input, 
            [e.target.name]: e.target.value
        })
    }

    const handleClick = () => {
        if(!input.name || !input.age || !input.img || !input.note) return;
        setPeople([...people, {name: input.name, age: Number(input.age), img: input.img, note: input.note}])
        setInput({ name: '', age: '', note: '', img: '' })
    }

    return (
        <div className='add-people'>
            <input type="text" onChange={handleChange} name='name' className='add-input' value={input.name} placeholder='Name' />
            <input type="text" onChange={handleChange} name='age' className='add-input' value={input.age} placeholder='Age' />
            <input type="text" onChange={handleChange} name='img' className='add-input' value={input.img} placeholder='Url' />
            <textarea name="note" onChange={handleChange} className='add-input' value={input.note} placeholder='Note'></textarea>
            <button onClick={handleClick} className='add-button'>Add to List</button>
        </div>
    )
}

export default AddToPeople