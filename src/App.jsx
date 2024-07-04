import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Nav } from './components/Nav/Nav'
import { Grid1 } from './pages/Grid1/Grid1'
import { MainBoard  } from './pages/MainBoard/MainBoard'

function App() {


  return (
    <>
      <BrowserRouter> 
        <Nav /> 
        <Routes>
          <Route path="/" element={<Grid1/>} /> 
          <Route path="/main" element={<MainBoard />} />
 
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
