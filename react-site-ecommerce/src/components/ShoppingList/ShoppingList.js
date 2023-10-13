import React, { useContext, useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';

// Styles
import "../../styles/shoppingList.css"

// Context
import { DetailsContext } from '../DetailsContext';

// Data sources
import { fetchProductsData } from '../../datas/ProductsDataSource';

// Components
import ProductCard from './ProductCard';
import ProductDetails from './ProductDetails';



const ShoppingList = () => {

    const [isDetailsVisible, setIsDetailsVisible] = useContext(DetailsContext);

    const [productDetails, setProductDetails] = useState();

    const [productsData, setProductsData] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchProductsData(); // Utilisez la fonction pour récupérer les données
                setProductsData(data);
            } catch (error) {
                // Gérez les erreurs ici
            }
        };

        fetchData(); // Appelez la fonction fetchData
    }, []); // Le tableau vide signifie que useEffect s'exécutera une seule fois après le premier rendu




    const toggleDetails = (product) => {
        setIsDetailsVisible(true);
        setProductDetails(product);
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Fait remonter l'utilisateur en haut de la page
    };


    return (
        <div className='shoppingList'>
            <div className="container">

                {isDetailsVisible && (
                    <div className="ProductDetails"><ProductDetails product={productDetails} /></div>
                )}

                <h1 className='mainTitle'>Welcome to Computer Shop!</h1>
                
                <div className="Products">
                    <Grid container spacing={2}>
                        {productsData.map((product) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                                <ProductCard product={product} onProductClick={toggleDetails} />
                            </Grid>
                        ))}
                    </Grid>
                </div>

            </div>            
        </div>
    );
};

export default ShoppingList;