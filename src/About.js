import React from 'react'
import { loginuser } from './redux/authreducer'
import { useDispatch } from 'react-redux'

const About = () => {
    const dispatch = useDispatch()
    return (
        <>About
            <button onClick={() => {dispatch(loginuser({ type: 'LOGOUT' })); localStorage.removeItem("loginuser")}}>logout</button>

        </>
    )
}

export default About