import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Cart from './pages/Cart'
import { CartProvider } from './context/CartContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SmileBackground from "./components/SmileBackground";
import ProductPage from './pages/Product'
import About from './pages/About'
import Signin from './pages/Signin'
import Signup from './pages/Signup'

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div>
          <SmileBackground />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}
