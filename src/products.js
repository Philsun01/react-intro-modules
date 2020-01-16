import React from 'react';
import {products} from './data';

const Products = ( ) => {
    return (
        <div>
            <h2> Products ({products.length})</h2>
            <ul>
                { 
                products.map( product => {
                    return (
                        <li key = {product.id}>
                            <h3>{product.name}</h3>
                            <div>Material: {product.material}</div>
                        </li>
                    )
                    })
                }
            </ul>
        </div>
    )
}

export default Products;