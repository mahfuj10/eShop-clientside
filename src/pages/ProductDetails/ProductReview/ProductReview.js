import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import RelatedProduct from './RelatedProduct';
import Review from './Review';
import ReviewForm from './ReviewForm';

const ProductReview = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://fathomless-sierra-85288.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [reviews])

    return (
        <>
            <Container className='mb-5 pb-5'>
                <Row>
                    <Col lg={6} style={{ height: "636px", overflowY: "scroll" }}>
                        {
                            reviews.map(review => <Review
                                review={review}
                                key={review?.image}
                            />)
                        }
                    </Col>



                    <Col lg={6}>
                        <ReviewForm />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default ProductReview;