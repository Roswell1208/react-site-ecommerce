import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

// Styles
import "../../styles/productCard.css"


const ProductCard = ({ product, onProductClick }) => {
    return (
        <div onClick={() => onProductClick(product)}>
            <Card>
                <div className='card'>
                    <CardContent>
                        <Typography variant="h6">{product.title}</Typography>
                        <img src={product.image} alt={product.id} />
                    </CardContent>
                </div>
            </Card>
        </div>
    );
};

export default ProductCard;