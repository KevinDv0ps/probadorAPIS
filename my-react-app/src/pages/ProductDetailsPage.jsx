import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ProductDetailsPage.css';

const ProductDetailsPage = ({ products }) => {
  const { id } = useParams(); // Obtiene el id del producto desde la URL
  const product = products.find((prod) => prod.id === parseInt(id));

  if (!product) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <div className="product-details-container">
      <h2>Detalles del Producto</h2>
      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Fecha Alta</th>
            <th>Activo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>${product.price}</td>
            <td>{product.dateH}</td>
            <td>{product.isActive ? 'Sí' : 'No'}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductDetailsPage;


