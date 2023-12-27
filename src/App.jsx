import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import Countries from './countries/Countries'

function App() {
  const [count, setCount] = useState(0)
 
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Countries/>}>
          <Route path="xCountries" exact element={<Countries />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
