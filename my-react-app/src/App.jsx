import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage';
import AddProductPage from './pages/AddProductPage';
import EditProductPage from './pages/EditProductPage'
import ProductDetailsFindPage from './pages/ProductDetailsFindPage'

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Producto A', description: 'Descripción del producto A', price: 100, dateH: '2021-09-01', isActive: true },
    { id: 2, name: 'Producto B', description: 'Descripción del producto B', price: 150, dateH: '2021-09-10', isActive: false },
  ]);
  return (
    <>
      <div chassName="Menu">
        <Router>
          <div>
            <NavBar />
            <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/agregar" element={<AddProductPage products={products} setProducts={setProducts}/>} />
              <Route path="/editar/:id" element={<EditProductPage products={products} setProducts={setProducts}/>} />
              <Route path="/productoFind" element={<ProductDetailsFindPage products={products} setProducts={setProducts}/>} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  )
}

export default App
