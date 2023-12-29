import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import Countries from './countries/Countries'
import Stopwatch from './Stopwatch/Stopwatch';
import XDisplayName from './XDisplayName/XDisplayName';
import XCounter from './XCounter/XCounter';
import XCalculator from './XCalculator/XCalculator';
import XLogin from './XLogin/XLogin';

function App() {
  const [count, setCount] = useState(0)
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>FDT-INTV</h1>} />
        <Route  path="xCountries" exact Component={()=><Countries />} />
        <Route  path="xStopwatch" exact Component={()=><Stopwatch />} />
        <Route  path="xDisplayName" exact Component={()=><XDisplayName />} />
        <Route  path="xCounter" exact Component={()=><XCounter />} />
        <Route  path="XCalculator" exact Component={()=><XCalculator />} />
        <Route  path="XLogin" exact Component={()=><XLogin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
