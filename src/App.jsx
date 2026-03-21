import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

// Layout Components
import Header from './components/Header/header.jsx';
import Footer from './components/Footer/Footer.jsx'; 

// Page Components
import Home from './Pages/Home/home.jsx';
import Shop from './Pages/Shop/Shop.jsx';
import ProductDetail from './Pages/ProductDetails/ProductDetail.jsx';
import Cart from './Pages/Cart/Cart.jsx';
import Checkout from './Pages/Checkout/Checkout.jsx';
import Login from './Pages/Login/Login.jsx';
import Register from './Pages/Register/Register.jsx';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact={true} element={<Home/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/product/:id" element={<ProductDetail/>} /> 
        <Route path="/cart" element={<Cart/>} /> 
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/login" element={<Login/>} /> 
        <Route path="/register" element={<Register/>} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

// THIS WAS MISSING:
export default App;