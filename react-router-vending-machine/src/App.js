import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import NavBar from './NavBar'

import VendingMachine from './VendingMachine'
import SnickerBar from './SnickerBar'
import ClifBars from './ClifBars'
import Soda from './Soda'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Route path="/" exact>
          <VendingMachine/>
        </Route>
        <Route path="/snickerBar" exact>
          <SnickerBar/>
        </Route>
        <Route path="/cliffBar" exact>
          <ClifBars/>
        </Route>
        <Route path="/soda" exact>
          <Soda/>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
