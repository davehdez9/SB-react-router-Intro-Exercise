import React from 'react'
import { Link } from "react-router-dom"
import CliffBarImg from './CliffBar.png'


function ClifBars() {
    return (
        <div className="ClifBars">
            <h1>Cliff Bar</h1>
            <img src={CliffBarImg} alt="Snicker Bar"/>
            <h2><Link to="/">Go Back</Link></h2>
        </div>
    )
}

export default ClifBars
