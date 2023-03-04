import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Cart from './pages/Cart'
import Success from './pages/Success'
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products/:categoris" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/success" element={<Success />} />
          <Route path="/login" element={user ? <Navigate to="/" replace /> : <Login />} />
          <Route path="/register" element={user ? <Navigate to="/" replace /> : <Register />} />
        </Routes>
      </Router>
  );
}

export default App;
