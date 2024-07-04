import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Nav } from './components/Nav/Nav'
import { Grid1 } from './pages/Grid1/Grid1'
import { Grid4 } from './pages/Grid4/Grid4'

function App() {


  return (
    <>
      <BrowserRouter> 
        <Nav /> 
        <Routes>
          <Route path="/" element={<Grid1/>} /> 
          <Route path="/grid4" element={<Grid4/>} />
 
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
