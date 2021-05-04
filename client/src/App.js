import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import NavBar from './components/navbar/NavBar'
import Landing from './components/page/Landing'
import SearchBar from './components/searchbar/SearchBar'
import './App.css'


function App() {

  return (
    <Router>
      <Route path="/">
        <Switch>
          <div className="page-container">
            <NavBar />
            <Landing />
            <SearchBar />
          </div>
        </Switch>
     </Route>
    </Router>
  )
}

export default App
