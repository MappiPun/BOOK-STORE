import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/header.jsx'
import Home from './Pages/Home/home.jsx'

function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={"/"} exact={true} element={<Home/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
