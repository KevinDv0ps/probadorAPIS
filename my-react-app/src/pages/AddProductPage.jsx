import React, { useState } from 'react';
import '../styles/AddProductPage.css';

const AddProductPage = ({ onAddProduct }) => {
    //Estado para los datos del formulario
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        dateH: '',
        isActive: ''
    });

    //Función para manejar cambios en los inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    //Función para manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación simple (asegurarse de que todos los campos estén llenos)
        if (!formData.name || !formData.price || !formData.description || !formData.dateH || !formData.isActive) {
            alert('Por favor complete todos los campos');
            return;
        }
        //Funcion para validar la fecha
        const dateValidationError = validateDate(formData.dateH);
        if (dateValidationError) {
          setDateError(dateValidationError);
          return;
        }
        // Crear el producto (puedes agregar un ID único aquí si lo deseas)
        const newProduct = {
            id: Date.now(), // Usamos Date.now() como un ID único temporal
            ...formData
        };

        // Llamar la función de agregar producto desde el componente principal
        onAddProduct(newProduct);

        // Limpiar el formulario después de agregar
        setFormData({
            name: '',
            description: '',
            price: '',
            dateH: '',
            isActive: ''
        });

    };

    return (
        //Formulario para agregar productos
        <div className="add-product-page">
            <h1>Agregar Producto</h1>
            <form onSubmit={handleSubmit}>
                {/* Nombre */}
                <div className="form-group">
                    <label htmlFor="name">Nombre</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                {/*Descripcion*/}
                <div className="form-group">
                    <label htmlFor="description">Descripcion</label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        value={formData.category}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/*Precio*/}
                <div className="form-group">
                    <label htmlFor="price">Precio</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/*Fecha Alta*/}
                <div className="form-group">
                    <label htmlFor="dateH">Fecha de alta (DD-MM-YYYY)</label>
                    <input
                        type="date"
                        id="dateH"
                        name="dateH"
                        value={formData.dateH}
                        onChange={handleChange}
                        placeholder="DD-MM-YYYY"
                        required
                    />
                </div>

                
                <div className="form-group">
                    <label htmlFor="isActive">¿Está activo?</label>
                    <select
                        id="isActive"
                        name="isActive"
                        value={formData.isActive}
                        onChange={handleChange}
                        required
                    >
                        {/*Opciones select*/}
                        <option value="">Seleccione...</option>
                        <option value="true">Sí</option>
                        <option value="false">No</option>
                    </select>
                </div>

                <button type="submit">Agregar Producto</button>
            </form>
        </div>
    );
};

export default AddProductPage;
