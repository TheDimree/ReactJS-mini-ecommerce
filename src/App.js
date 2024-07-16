import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import Cart from './components/Cart';
import {Route, Routes} from "react-router";
import Footer from './components/Footer';

function App() {

  return (
    <div className='body'>
      <Header/>
      <section className='product-wrapper'>
        <div className="container">
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/products" element={<Products/>}/>
              <Route path="/cart" element={<Cart/>}/>
            </Routes>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default App;