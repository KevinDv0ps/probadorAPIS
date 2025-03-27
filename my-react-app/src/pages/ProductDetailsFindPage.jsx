import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const ProductDetailsFindPage = ({product}) => {
    const [searchId, setSearchId] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setSearchId(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        const productId = parseInt(searchId);

        // Validación de si el ID es un número
        if (isNaN(productId)) {
            setError('Por favor ingrese un ID válido.');
            return;
        }

        // Buscar el producto por ID
        const product = products.find((product) => product.id === productId);

        if (product) {
            // Si el producto existe, redirigir a la página de detalles
            navigate(`/ver-producto/${productId}`);
        } else {
            setError('Producto no encontrado.');
        }
    };

    return (
        <div className="search-product-container">
            <h2>Buscar Producto por ID</h2>
            <form onSubmit={handleSearch} className="search-form">
                <div className="form-group">
                    <label htmlFor="searchId">ID del Producto</label>
                    <input
                        type="text"
                        id="searchId"
                        value={searchId}
                        onChange={handleChange}
                        placeholder="Ingrese el ID del producto"
                        required
                    />
                </div>
                {error && <p className="error-message">{error}</p>}
                <button type="submit" className="search-btn">Buscar Producto</button>
            </form>
        </div>
    );
};

export default ProductDetailsFindPage;
