import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Library from './pages/Grid1/Grid1'
import Header from './components/Header/Header'
import { MainBoard  } from './pages/MainBoard/MainBoard'

function App() {


  return (
    <>
      <BrowserRouter> 
        <Header />
        <Routes>
          <Route path="/library" element={<Library/>} /> 
          <Route path="/" element={<MainBoard />} />
          {/* <Route path="/longterm" element={<Longterm/>} /> */}
 
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
