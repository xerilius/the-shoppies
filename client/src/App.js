import React, { useEffect, useState } from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import NavBar from './components/navbar/NavBar'
import Landing from './components/page/Landing'
import SearchBar from './components/searchbar/SearchBar'
import Content from './components/content/Content'
import './App.css'


function App() {
  const [initialLoad, setInitialLoad] = useState(true)
  const [query, setQuery] = useState('')
  const [message, setMessage] = useState({alert:"", error:""})

  useEffect(() => {
    setInitialLoad(true)
  }, [])

  function handleSubmit(e, searchQuery) {
    e.preventDefault()
    setQuery(searchQuery)
    setInitialLoad(false)
  }
  
  return (
    <Router>
      <Route path="/">
        <Switch>
          <div className="page-container">
            <NavBar />
            { (initialLoad && query === '') && <Landing />}
            <SearchBar handleSubmit={handleSubmit} />
            { query !== '' &&
              <Content 
                query={query} 
                setMessage={setMessage} 
                message={message}
              /> 
            }
          </div>
        </Switch>
     </Route>
    </Router>
  )
}

export default App
