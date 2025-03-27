import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

const HomePage = () => {
  //Datos de prueba
  const [products, setProducts] = useState([
    { id: 1, name: 'Producto A', description: 'Descripción del producto A', price: 100, dateH: '2021-09-01', isActive: true },
    { id: 2, name: 'Producto B', description: 'Descripción del producto B', price: 150, dateH: '2021-09-10', isActive: false },
  ]);
  const handleView = (productId) => {
    alert(`Ver detalles del producto con ID: ${productId}`);
    //Redirige a ver por ID
  };
  //Función para manejar la acción de eliminar un producto
  const handleDelete = (productId) => {
    const confirmDelete = window.confirm('¿Estás seguro de que quieres eliminar este producto?');
    if (confirmDelete) {
      setProducts(products.filter(product => product.id !== productId));
    }
  };

  return (
    <div className="home-page">
      <h1>Lista de Productos</h1>
      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Fecha Alta</th>
            <th>Activo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>${product.price}</td>
              <td>{product.dateH}</td>
              <td>{product.isActive ? 'Sí' : 'No'}</td>
              <td>
                <button onClick={() => handleView(product.id)}>Ver</button>
                <Link to={`/editar/${product.id}`}>
                  <button>Editar</button>
                </Link>
                <button onClick={() => handleDelete(product.id)}>Borrar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;
