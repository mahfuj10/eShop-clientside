import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { searchContext } from '../../Shared/Navigation/Navigation';
import Product from '../Product/Product';

const AllProducts = () => {

    const [products, setProducts] = useState([]);
    const [searchProducts, setSearchProducts] = useState([]);
    const [searchProduct] = useContext(searchContext);

    useEffect(() => {
        fetch('https://fathomless-sierra-85288.herokuapp.com//products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setSearchProducts(data)
            })
    }, []);

    const matchProducts = products.filter(product => product.name.toLowerCase().includes(searchProduct.toLowerCase()));
    const categoryMatchProducts = products.filter(product => product?.origin?.toLowerCase().includes(searchProduct.toLowerCase()));
    // setProducts(matchProducts)
    // console.log(categoryMatchProducts);

    return (

        <Container>
            <Row>
                {
                    matchProducts.map(product => <Product
                        key={product._id}
                        product={product}
                    />)
                }
            </Row>
        </Container>

    );
};

export default AllProducts;