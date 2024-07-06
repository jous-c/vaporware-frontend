import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Grid1 } from './pages/Grid1/Grid1'
import { MainBoard  } from './pages/MainBoard/MainBoard'

function App() {


  return (
    <>
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<Grid1/>} /> 
          <Route path="/main" element={<MainBoard />} />
          {/* <Route path="/longterm" element={<Longterm/>} /> */}
 
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
