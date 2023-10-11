import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

// Styles
import "../../styles/productDetails.css"

// Context
import { DetailsContext } from '../DetailsContext';

const ProductDetails = (props) => {

    const {product} = props;

    const [,setIsDetailsVisible] = useContext(DetailsContext);

    const closeDetails = () => {
        setIsDetailsVisible(false);
    }

    return (
        <div className='detailsProduct'>
            <Card>
                <CardContent>
                    <Typography variant="h5">{product.name}</Typography>
                    <Typography variant="body2">{product.description}</Typography>
                    <Typography variant="body2">{product.price} €</Typography>
                    <button onClick={() => closeDetails()}>Close</button>
                </CardContent>
            </Card>
        </div>
    );
};

export default ProductDetails;