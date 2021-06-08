import React from 'react'
import { Link } from "react-router-dom"
import SnickerBarImg from './SnickerBar.jpeg'

function SnickerBar(){
    return (
        <div className="SnickerBar">
            <h1>Snicker Bar</h1>
            <img src={SnickerBarImg} alt="Snicker Bar"/>
            <h2><Link to="/">Go Back</Link></h2>
        </div>
    )
}

export default SnickerBar