import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import TrendingProduct from './TrendingProduct';


const TrendingProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fathomless-sierra-85288.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (

        <Container>

            <h2 className="text-center">Trending products</h2>

            <Row >

                {
                    products.map(product => product.show === "trending" && <TrendingProduct
                        product={product}
                        key={product.image}
                    >
                    </TrendingProduct>)
                }


            </Row>


        </Container>
    );
};

export default TrendingProducts;