import React from 'react'
import Nav from './components/Nav'
import {BrowserRouter as Router, Routes,Route,} from 'react-router-dom'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Main from './components/Main'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SignUp/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/main' element={<Main/>} /> 
      </Routes>
    </Router>
  )
}

export default App