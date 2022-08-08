import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card'
import './FinalSpaceCards.css'

const FinalSpaceCards = () => {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        fetch('https://finalspaceapi.com/api/v0/character/')
            .then(res => res.json())
            .then(data => setCharacters(data))
            .catch(err => console.log(err))
    },[])

    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
    }
    
    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
    }

    return (
        <div className='finalSpaceCards'>
            <div className='finalSpaceCards__container'>
                {characters.map(character => (
                    <TinderCard
                        className='swipe'
                        key={character.id}
                        onSwipe={onSwipe} 
                        onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['up', 'down']}
                    >
                        <div style={{ backgroundImage: `url(${character.img_url})`}} className="card">
                            <h3>Name - {character.name}</h3>
                            <h4>Species - {character.species}</h4>
                        </div>
                    </TinderCard>
                ))}
            </div> 
        </div>
    )
}

export default FinalSpaceCards