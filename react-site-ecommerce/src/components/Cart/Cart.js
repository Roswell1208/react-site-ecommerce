import React, { useContext, useEffect, useState } from 'react';

// Styles
import "../../styles/cart.css"

// Assets
import bin from "../../assets/bin.png"

// Context
import { CartQuantityContext } from '../CartQuantityContext';


const Cart = () => {

    const [cart, setCart] = useState({});

    const [cartQuantity,setCartQuantity] = useContext(CartQuantityContext);

    useEffect(() => {
        // Récupérez les données du panier depuis le local storage lors du montage du composant
        const savedCart = JSON.parse(localStorage.getItem('cart')) || {};
        setCart(savedCart);
    }, []);

    const incrementQuantity = (productId) => {
        // Incrémentez la quantité d'un produit dans le panier
        const updatedCart = { ...cart };
        updatedCart[productId].quantity += 1;
        setCart(updatedCart);
        setCartQuantity(cartQuantity + 1);
        // Mettez à jour le local storage avec le panier mis à jour
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const decrementQuantity = (productId) => {
        // Décrémentez la quantité d'un produit dans le panier (à condition que la quantité soit supérieure à 1)
        if (cart[productId].quantity > 1) {
            const updatedCart = { ...cart };
            updatedCart[productId].quantity -= 1;
            setCart(updatedCart);
            setCartQuantity(cartQuantity - 1);
            // Mettez à jour le local storage avec le panier mis à jour
            localStorage.setItem('cart', JSON.stringify(updatedCart));
        }
    };

    const removeFromCart = (product) => {
        // Retirez un produit du panier
        const updatedCart = { ...cart };
        delete updatedCart[product.id];
        setCart(updatedCart);
        setCartQuantity(cartQuantity - product.quantity);
        // Mettez à jour le local storage avec le panier mis à jour
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const getTotalPrice = () => {
        // Calculez le prix total du panier
        return Object.values(cart).reduce((total, product) => {
            return Number(Number(total + product.quantity * product.price).toFixed(2));
        }, 0);
    };

    return (
        <div>
            {cartQuantity > 0 &&
            
            <div className="cartContainer">
                <h2 className='cartTitle'>Your cart</h2>
                <table className="cartTable">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th className='description'>Description</th>
                            <th>Unit price</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.values(cart).map(product => (
                            <tr key={product.id}>
                                <td>{product.title}</td>
                                <td className='description'>{product.description}</td>
                                <td>{product.price} $</td>
                                <td className='quantityField'>
                                    <button onClick={() => decrementQuantity(product.id)}>-</button> {product.quantity} <button onClick={() => incrementQuantity(product.id)}>+</button>
                                </td>
                                <td>
                                    <button className="removeButton" onClick={() => removeFromCart(product)}><img src={bin} alt='bin' /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="totalPrice">
                    <h3>Total price: {getTotalPrice()} $</h3>
                </div>
                <button className="checkoutButton">Click to order</button>
            </div>

            || 
            
            <div className='noProducts'>
                <h4>You have no products in the cart!</h4>
                <form action="/">
                    <button type="submit">Go to shopping list</button>
                </form>
            </div>
            }
        </div>
    );
};

export default Cart;