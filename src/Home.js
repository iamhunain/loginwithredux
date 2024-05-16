import React from 'react'
import { Link } from 'react-router-dom'

const Home = ({login}) => {
    return (
        <>
            <button onClick={() => login()}>login</button>
            Home <br />
            <Link to="/about">about</Link>
            </>
    )
}

export default Home