import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
import {Routes, Route } from 'react-router-dom';
import Products from './components/Product/Products';
import SignInAndUp from './Pages/SignInAndUp/SignInAndUp';
import ErrorPage from './Pages/Error/ErrorPage'
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import ProductDetail from './Pages/Product/ProductDetail/ProductDetail';
import Cart from './Pages/Cart/Cart';
import Checkout from './Pages/Checkout/checkout'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<ProductDetail/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/signin'  element={<SignInAndUp />}/>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
