import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

export default function Product(props) {
    const [product, setProduct] = useState('');

    const id = props.match.params.id;

    async function loadProduct() {
        await api.get(`products/${id}`).then(response => {
            setProduct(response.data);
        })
    }
    useEffect(() => {
        loadProduct();
    }, []);

    return (
        <div className="product-info">
            <h1>{product.title}</h1>
            <p>{product.description}</p>

            <p>
                URL: <a href={product.url}>{product.url}</a>
            </p>
            <div className="back-home">
                <Link id="buttonBack" to={'/'}>Voltar</Link>
            </div>
        </div>
    );

}
