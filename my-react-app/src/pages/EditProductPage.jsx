import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';


const EditProductPage = ({ products, setProducts }) => {
  // Obtener el ID del producto desde la URL
  const { id } = useParams();
  const navigate = useNavigate();

  // Inicializamos el estado del producto con datos vacíos
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    isActive: '',
  });

  // Llenamos el estado con el producto correspondiente cuando el componente se monta
  useEffect(() => {
    const productToEdit = products.find((product) => product.id === parseInt(id));
    if (productToEdit) {
      setProduct(productToEdit);
    } else {
      console.error('Producto no encontrado');
      navigate('/'); // Redirigir a la página principal si el producto no existe
    }
  }, [id, products, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Actualizar el producto en el estado global o lista de productos
    const updatedProducts = products.map((prod) =>
      prod.id === parseInt(id) ? { ...prod, ...product } : prod
    );

    setProducts(updatedProducts);
    console.log('Producto actualizado:', product);

    // Redirigir de vuelta a la página principal después de guardar
    navigate('/');
  };

  return (
    <div className="edit-product-container">
      <h2>Editar Producto</h2>
      <form className="edit-product-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleChange}
            placeholder="Ingrese el nombre del producto"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Descripción</label>
          <input
            type="text"
            id="description"
            name="description"
            value={product.description}
            onChange={handleChange}
            placeholder="Ingrese la descripción del producto"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Precio</label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
            placeholder="Ingrese el precio del producto"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="isActive">¿Está activo?</label>
          <select
            id="isActive"
            name="isActive"
            value={product.isActive}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione...</option>
            <option value="true">Sí</option>
            <option value="false">No</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">
          Actualizar Producto
        </button>
      </form>
    </div>
  );
};

export default EditProductPage;
