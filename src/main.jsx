import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import { WishlistProvider } from './context/WishlistContext' 
import { CartProvider } from './context/CartContext';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key. Check your .env file!")
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <WishlistProvider>
      <CartProvider> 
        <App />
      </CartProvider>
    </WishlistProvider>
  </ClerkProvider>
</StrictMode>
)