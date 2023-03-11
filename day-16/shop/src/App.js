import './App.css';
import { Link, Switch, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home';
import Product from './pages/product/Product';
import Cart from './pages/cart/Cart';

function App() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/"> Home</Link>
            <Link to="/product"> Product</Link>
            <Link to="/cart"> Cart</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/product">
            <Product />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </div >
    </BrowserRouter>
  );
}

export default App;
