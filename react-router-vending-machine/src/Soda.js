import React from 'react'
import { Link } from 'react-router-dom'
import SodaImg from './soda.png'

function Soda() {
    return (
        <div className='Soda'>
            <h1>Soda</h1>
            <img src={SodaImg} alt="Soda"/>
            <h2><Link to="/">Go Back</Link></h2>
        </div>
    )
}

export default Soda
