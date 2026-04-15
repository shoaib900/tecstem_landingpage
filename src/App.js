import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Routes/Home'
import Todo from './Routes/Todo'

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/todo' element={<Todo/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
