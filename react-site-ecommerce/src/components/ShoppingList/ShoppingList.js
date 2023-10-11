import React, { useContext, useState } from 'react';
import Grid from '@mui/material/Grid';

// Styles
import "../../styles/shoppingList.css"

// Context
import { DetailsContext } from '../DetailsContext';

// Components
import ProductCard from './ProductCard';
import ProductDetails from './ProductDetails';


const products = [
    { id: 1, name: 'Produit 1', description: 'Description du produit 1', price: 37.99 },
    { id: 2, name: 'Produit 2', description: 'Description du produit 2', price: 99.99 },
    { id: 3, name: 'Produit 3', description: 'Description du produit 3', price: 4.99 },
    { id: 4, name: 'Produit 4', description: 'Description du produit 4', price: 20.99 },
    { id: 5, name: 'Produit 5', description: 'Description du produit 5', price: 1.99 },
    { id: 6, name: 'Produit 6', description: 'Description du produit 6', price: 102.99 },
    { id: 7, name: 'Produit 7', description: 'Description du produit 7', price: 17.99 },
    { id: 8, name: 'Produit 8', description: 'Description du produit 8', price: 10.99 },
    { id: 9, name: 'Produit 9', description: 'Description du produit 9', price: 8.99 },
    { id: 10, name: 'Produit 10', description: 'Description du produit 10', price: 12.99 },
    // Ajoutez d'autres produits ici
  ];



const ShoppingList = () => {

    const [isDetailsVisible, setIsDetailsVisible] = useContext(DetailsContext);

    const [productDetails, setProductDetails] = useState();

    const toggleDetails = (product) => {
        setIsDetailsVisible(true);
        setProductDetails(product);
    };

    return (
        <div className='shoppingList'>
            <div className="container">

                {isDetailsVisible && (
                    <div className="ProductDetails"><ProductDetails product={productDetails} /></div>
                )}
                
                <div className="Products">
                    <Grid container spacing={2}>
                        {products.map((product) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                                <ProductCard product={product} />
                                <button onClick={() => toggleDetails(product)}>Details</button>
                            </Grid>
                        ))}
                    </Grid>
                </div>

            </div>            
        </div>
    );
};

export default ShoppingList;