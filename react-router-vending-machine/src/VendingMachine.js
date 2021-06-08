import React from 'react'
import { Link } from 'react-router-dom'
import './VendingMachine.css'


function VendingMachine() {
    return(
        <div className="VendingMachine">
            <h1>Hello I am a vending machine. What would you like to eat?</h1>
            <h2><Link to="/snickerBar">Snicker Bar</Link></h2>
            <h2><Link to="/cliffBar">Cliff Bar</Link></h2>
            <h2><Link to="/soda">Soda</Link></h2>
        </div>
    )
}

export default VendingMachine
