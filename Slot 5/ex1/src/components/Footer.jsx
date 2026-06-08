import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <Container fluid className="bg-light text-dark text-center py-3">
            <Row>
                <Col>
                    <p>ID: DE190098</p>
                    <p>Name: Bùi Hoàng Long</p>
                    <p>Gmail: blong2294@gmail.com</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;