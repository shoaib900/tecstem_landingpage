import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Routes/Home'
import Todo from './Routes/Todo'
import Login from './auth/Login'
import Register from './auth/Register'

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/todo' element={<Todo/>}/>
        <Route path="/login" element= {<Login /> } />
        <Route path="/register" element={<Register />} />
        
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
