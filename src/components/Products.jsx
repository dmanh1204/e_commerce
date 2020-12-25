import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './products/Product';

const products = [
    { id: 1, name: 'Shoes', description: 'Running shoes.', price: '$5', image: 'https://cdn.shopify.com/s/files/1/0102/0775/6385/products/01114-1956931_1200x.jpg?v=1606856872'},
    { id: 2, name: 'Macbook', description: 'Apple macbook.', price: '$10', image: 'https://zdnet4.cbsistatic.com/hub/i/r/2020/11/16/37e33024-2892-4bb7-9d21-6ac6f7544def/thumbnail/770x433/5f1b7f881bfb80a9f2bbe02bc6d64b49/apple-macbook-pro-m1-2020-5.jpg'}
]
const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {
                    products.map(product => (
                        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                            <Product product={product} />
                        </Grid>
                    ))
                }
            </Grid>
        </main>
    )
}

export default Products;