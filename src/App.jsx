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
import MyAccount from './Pages/MyAccount/MyAccount.jsx'; 
import SearchResults from './Pages/Search/SearchResults.jsx';
import Wishlist from './Pages/Wishlist/Wishlist.jsx'; 
import AdminDashboard from './Pages/Admin/AdminDashboard.jsx';
import CategoryPage from './Pages/Category/CategoryPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/" exact={true} element={<Home/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/product/:id" element={<ProductDetail/>} /> 
        <Route path="/cart" element={<Cart/>} /> 
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/login" element={<Login/>} /> 
        <Route path="/register" element={<Register/>} /> 
        <Route path="/my-account" element={<MyAccount/>} /> 
        <Route path="/search" element={<SearchResults />} />
        <Route path="/wishlist" element={<Wishlist />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

// FIXED: Only one default export allowed per file
export default App;