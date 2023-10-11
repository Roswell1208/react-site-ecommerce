import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

// Context
// import { DetailsContext } from '../DetailsContext';


const ProductCard = ({ product }) => {
    return (
        <div>
            <Card>
                <CardContent>
                    <Typography variant="h5">{product.name}</Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default ProductCard;