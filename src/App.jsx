import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { appsData, productsData } from './data.js';
import Home from './pages/Home/Home';
import ProductsPage from './pages/Products/ProductsPage';
import ViewProductPage from './pages/ViewProduct/ViewProductPage';
import './App.css'
import EditProductPage from './pages/EditProduct/EditProduct.jsx';
import AppsPage from './pages/Apps/index.jsx';

export default function App() {
  const [products, setProducts] = useState(productsData);
  const [apps, setApps] = useState(appsData);

  console.log({ products, apps });

  return (
    <div className="App">
      <header>
        <h1>Apple Shop</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/apps">Apps</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/products/:id/edit' element={<EditProductPage products={products} setProducts={setProducts}/>}></Route>
        <Route path="/products/:id" element={<ViewProductPage />} />
        <Route path="/products" element={<ProductsPage products={products} />}/>
        <Route path='/apps' element={<AppsPage apps={apps}/>}></Route>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
