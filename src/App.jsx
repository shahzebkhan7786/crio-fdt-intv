import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import Countries from './countries/Countries'
import Stopwatch from './Stopwatch/Stopwatch';
import XDisplayName from './XDisplayName/XDisplayName';
import XCounter from './XCounter/XCounter';
import XCalculator from './XCalculator/XCalculator';
import XLogin from './XLogin/XLogin';
import XStates from './XStates/XStates';
import XCountriesSearch from './XCountriesSearch/XCountriesSearch';
import XClassComp from './XClassComp/XClassComp';
import XPagination from './XPagination/XPagination';
import XWeatherApp from './XWeatherApp/XWeatherApp';
import XSpellCheck from './XSpellCheck/XSpellCheck';

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
        <Route  path="XStates" exact Component={()=><XStates />} />
        <Route  path="XCountriesSearch" exact Component={()=><XCountriesSearch />} />
        <Route  path="XClassComp" exact Component={()=><XClassComp />} />
        <Route  path="XPagination" exact Component={()=><XPagination />} />
        <Route  path="XWeatherApp" exact Component={()=><XWeatherApp />} />
        <Route  path="XSpellCheck" exact Component={()=><XSpellCheck />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
