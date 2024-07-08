import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LibraryPage from './pages/Library/Library'
import Header from './components/Header/Header'
import { MainBoard  } from './pages/MainBoard/MainBoard'
import Grid1 from './pages/Grid1/Grid1'

function App() {


  return (
    <>
      <BrowserRouter> 
        <Header />
        <Routes>
          <Route path="/library" element={<LibraryPage/>} /> 
          <Route path="/" element={<MainBoard />} />
          <Route path="/longterm" element={<Grid1/>} />
 
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
