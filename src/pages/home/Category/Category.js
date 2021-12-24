import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Category = () => {

    const [categorys, setCategory] = useState([]);
    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(data => setCategory(data));
    }, []);

    const history = useHistory();
    const handaleSetRoute = (category) => {
        history.push(`${category}`)
    }


    return (
        <Container>
            <Row>
                {
                    categorys.map(category => <Col xs={6} md={4} lg={2}
                        onClick={() => handaleSetRoute(category.name)}
                        className="mb-5" title={category.name}
                    >
                        <aside className="d-flex  justify-content-center align-items-center" style={{ height: "167px", width: "167px", borderRadius: "50%", backgroundColor: "#E8EDF1" }}>
                            <img width="130" src={category?.image} alt="categoryImage" />
                        </aside>
                        <aside style={{ width: "167px" }}>
                            <h5 className="text-center">{category.name}</h5>
                        </aside>
                    </Col>)
                }
            </Row>
        </Container>
    );
};

export default Category;