import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

// Styles
import "../../styles/productDetails.css"

// Context
import { DetailsContext } from '../DetailsContext';
import { CartQuantityContext } from '../CartQuantityContext';

const ProductDetails = (props) => {

    const {product} = props;

    const [,setIsDetailsVisible] = useContext(DetailsContext);
    const [cartQuantity,setCartQuantity] = useContext(CartQuantityContext);


    const addToCart = () => {
        // Vérifiez si le produit est déjà dans le panier (local storage)
        const existingCart = JSON.parse(localStorage.getItem('cart')) || {};

        if (existingCart[product.id]) {
            // Si le produit existe déjà dans le panier, augmentez la quantité de 1
            existingCart[product.id].quantity += 1;
        } else {
            // Si le produit n'est pas dans le panier, ajoutez-le avec une quantité de 1
            existingCart[product.id] = {
                ...product,
                quantity: 1
            };
        }

        // Mettez à jour le panier dans le local storage
        localStorage.setItem('cart', JSON.stringify(existingCart));
        setCartQuantity(cartQuantity + 1);

        alert("Product added to cart!")
    }


    const closeDetails = () => {
        setIsDetailsVisible(false);
    }

    return (
        <div className='detailsProduct'>
            <Card>
                <CardContent>
                    <Typography variant="h5">{product.title}</Typography>
                    <img src={product.image} alt={product.id} />
                    <Typography variant="body2">{product.description}</Typography>
                    <Typography variant="body2">{product.price} $</Typography>
                    <div className='addToCart'>
                        <button onClick={() => addToCart()}>Add to cart</button>
                    </div>

                    <div className='closeDetails'>
                        <button onClick={() => closeDetails()}>Close</button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default ProductDetails;