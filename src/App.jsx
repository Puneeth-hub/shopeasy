import React, {useState} from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Banner from './components/Banner/Banner.jsx'
import Widget from './components/Widget/Widget.jsx'
import Product from './components/Product/Product.jsx'

import Footer from './components/Footer/Footer.jsx'
import './App.css'

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className='App-container'>
      <Navbar cartCount={cart.length} />
      <Banner/>
      <Product addToCart={addToCart} />
      <Widget/>
      <Footer/>
    </div>
  )
}

export default App
