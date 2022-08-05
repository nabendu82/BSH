import React from 'react'

interface IProps{
    people: {
        name: string;
        age: number;
        img: string;
        note: string;
    }[]
}

const PeopleList: React.FC<IProps> = ({ people }) => {
    return (
        <ul>
            {people.map(person => (
                <li className='list' key={person.name}>
                    <div className="list-header">
                        <img src={person.img} alt={person.name} className="list-img" />
                        <h2>{person.name}</h2>
                    </div>
                    <p>{person.age} years old</p>
                    <p className="list-note">{person.note}</p>
                </li>
            ))}
        </ul>
    )
}

export default PeopleList