import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css'; 


const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Ver todos los productos</Link></li>
                <li><Link to="/agregar">Agregar producto</Link></li>
                <li><Link to="/productoFind">Ver producto por ID</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;
