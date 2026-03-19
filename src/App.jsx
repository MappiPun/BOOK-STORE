import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/header.jsx'
import Home from './Pages/Home/home.jsx'
import Footer from './components/Footer/Footer.jsx' 

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path={"/"} element={<Home/>} />
      </Routes>

      {/* <Footer /> */}  {/* <-- ADD THESE BRACKETS AND SLASHES TO HIDE IT */}
      
    </BrowserRouter>
    </>
  )
}

export default App