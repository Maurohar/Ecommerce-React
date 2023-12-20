import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Route, Routes } from 'react-router-dom';
import NavBar from '../src/Components/Navbar';
import Home from '../src/Components/Home';
import Cart from '../src/Components/Cart';
import Products from '../src/Components/Products';
import User from '../src/Components/User';

function App() {
  return (
    <>
    <>
      <NavBar />
    </>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/cart/:cartId" element={<Cart />} />
          <Route path="/products/:productId" element={<Products />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
