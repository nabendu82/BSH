import React from 'react'
import Projects from './Projects'
import AddClient from './AddClient'
import Clients from './Clients'
import AddProject from './AddProject'

const Home = () => {
    return (
        <>
            <div className="d-flex gap-3 mb-4">
                <AddProject />
                <AddClient />
            </div>
            <Projects />
            <hr />
            <Clients />
        </>
    )
}

export default Home